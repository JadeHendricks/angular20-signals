import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, Observable, Subject, switchMap, timer } from 'rxjs';

type Post = { id: number; title: string };
type User = { id: number; name: string };

@Component({
  selector: 'app-to-signal-example',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './to-signal-example.component.html',
  styleUrl: './to-signal-example.component.scss'
})
export class ToSignalExampleComponent {
  private http = inject(HttpClient);

  // Create an RxJS timer that emits every 1000ms (1 second).
  // Each tick is mapped to a new Date().toLocaleTimeString() string.
  // -> So we now have an Observable<string> that updates every second.
  private clock$ = timer(0, 1000).pipe(
    map(() => new Date().toLocaleTimeString())
  );
  
  // Convert the clock$ Observable into a Signal using `toSignal`.
  // Signals are synchronous and can be read in the template with ().
  // The initialValue is shown until the first value from clock$ arrives.
  // -> timeSignal() in the template will update every second.
  readonly timeSignal = toSignal(this.clock$, { initialValue: '—' });

  // Subject is our manual trigger: calling `.next()` pushes a value to subscribers.
  // When we call `.next('posts')` or `.next('users')`, the stream will react.
  // We cast it to Observable<(Post | User)[]> so we can unify the type.
  private resource$ = new Subject<'posts' | 'users'>();

  // Create an Observable that reacts to the resource$ Subject.
  // `switchMap` listens for the latest resource type.
  private data$ = this.resource$.pipe(
    switchMap((res) =>
      res === 'posts'
        ? this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        : this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
    )
  ) as Observable<(Post | User)[]>;;

  // Convert the data$ Observable into a Signal.
  // - It will auto-update when the HTTP call completes.
  // - initialValue is an empty array so the template has a safe starting value.
  readonly data = toSignal(this.data$, { initialValue: [] as (Post | User)[] });

  // Public method that triggers loading posts by pushing 'posts' into the Subject.
  public loadPosts(): void {
    this.resource$.next('posts');
  }

  // Public method that triggers loading posts by pushing 'users' into the Subject.
  public loadUsers(): void {
    this.resource$.next('users');
  }
}
