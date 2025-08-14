import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computed-signal-example',
  imports: [],
  templateUrl: './computed-signal-example.component.html',
  styleUrl: './computed-signal-example.component.scss'
})
export class ComputedSignalExampleComponent {

  readonly firstSignal = signal<number>(100);
  readonly secondSignal = signal<number>(100);

  readonly thirdSignal = signal<number>(200);

  // Computed signals are read-only signals that are derived from other signals.
  // Computed signals are automatically updated when the signals they depend on change.
  // They are also lazy, meaning they are only computed when they are read.
  readonly computedSignalWithTwoSignals = computed(() => {
    return this.firstSignal() + this.secondSignal();
  });

  readonly computedSignalUpdates = computed(() => {
    return `${this.thirdSignal() * 2}`;
  });

  public updatingThirdSignal(): void {
    this.thirdSignal.update(value => value + 1);
  }

}
