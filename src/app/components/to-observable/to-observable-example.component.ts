import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { debounceTime, map, switchMap } from 'rxjs';

type User = { id: number; name: string };

@Component({
  selector: 'app-to-observable-example',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './to-observable-example.component.html',
  styleUrl: './to-observable-example.component.scss'
})
export class ToObservableExampleComponent {

  readonly http = inject(HttpClient);

  // You’d use toObservable whenever you need to bridge Angular signals into the RxJS world
  // (e.g., using operators, effects, or APIs that expect observables).
  // toSignal(obs$) → makes an Observable usable as a Signal.
  // toObservable(sig) → makes a Signal usable as an Observable.


  readonly count = signal<number>(0);
  readonly search = signal<string>('');


  // Bridges the signal → RxJS: returns an Observable<number> that
  // emits the current value immediately on subscribe (so subscribers see 0 right away),
  // then emits again every time the count signal changes.
  // You don’t manually call .next(); emissions are driven by the signal.
  private count$ = toObservable(this.count);
  private search$ = toObservable(this.search);

  // final values
  public doubled: number = 0;
  // (debounceTime, switchMap, etc.). Every time `search` changes, this observable emits the new value.
  public results: User[] = [];


  // When the component is created:
  // Immediately receives 0 (the current signal value), maps to 0 * 2, sets doubled = 0.
  // On every future emission from count$ (i.e., whenever the signal changes), maps and assigns again.

  // Lifecycle: toObservable ties the subscription to the component’s injector, so it’s cleaned up automatically when the component is destroyed (no manual unsubscribe neede
  constructor() {
    this.count$
      .pipe(
        map(v => v * 2), 
        takeUntilDestroyed()
      ).subscribe(val => (this.doubled = val));

    // Start reacting to search text changes.
    this.search$
      .pipe(
        // Wait 400ms after the user stops typing before making a request.
        // This reduces unnecessary HTTP calls while the user is still typing.
        debounceTime(400), 
        // If a new query arrives before the old request finishes,
        // switchMap cancels the previous request and uses the latest one.
        switchMap(q =>
          this.http.get<User[]>(
            `https://jsonplaceholder.typicode.com/users?name_like=${q}`
          )
        ),
        takeUntilDestroyed()
      ).subscribe(users => (this.results = users));
  }

  // Every time count changes, the Observable from toObservable(count) emits the new value to its subscribers—just like a .next(newValue) would.
  // You never call .next() yourself; the signal is the source, and toObservable forwards its changes as emissions.
  public increment(): void {
    this.count.update(v => v + 1);
  }

  // This triggers a new emission on `search$`, which flows through the
  // debounce + switchMap pipeline above.
  public updateSearch(term: string): void {
    this.search.set(term);
  }
}
