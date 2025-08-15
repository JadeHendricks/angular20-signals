import { Component, signal } from '@angular/core';
import { outputFromObservable } from '@angular/core/rxjs-interop';
import { interval, map, tap } from 'rxjs';

@Component({
  selector: 'app-output-child-second-example',
  imports: [],
  standalone: true,
  templateUrl: './output-child-second-example.component.html',
  styleUrl: './output-child-second-example.component.scss'
})
export class OutputChildSecondExampleComponent {

  readonly latestTick = signal<string>('Waiting...');

  // outputFromObservable() is a helper from @angular/core/rxjs-interop. (It wires your observable into Angular’s lifecycle.)
  // Angular automatically subscribes when the component is created and unsubscribes when the component is destroyed.
  // Angular subscribes to your observable and automatically forwards emissions as outputs (no manual .emit() needed).
  // Emits a value every 5 seconds
  readonly tick = outputFromObservable(
    interval(7000).pipe(
      map(i => `Tick #${i + 1}`),
      tap(message => this.latestTick.set(message)) // update signal for UI
    )
  );
}
