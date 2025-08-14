import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-writeable-signal-example',
  imports: [],
  templateUrl: './writeable-signal-example.component.html',
  styleUrl: './writeable-signal-example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WriteableSignalExampleComponent {
  // Example signals
  // These signals can be used to demonstrate the functionality of writeable signals
  readonly firstSignal = signal('Hello World');
  readonly secondSignal = signal(100);

  public setSignal(): void {
    // set - sets a new value for the signal
    this.firstSignal.set('Updated Hello World');
  }

  public updateSignal(): void {
    // update - sets a new value based on the current value
    this.secondSignal.update(value => value + 1);
  }
}
