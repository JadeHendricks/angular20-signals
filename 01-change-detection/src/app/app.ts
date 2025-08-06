import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,   // 1. change from default to OnPush strategy
})
export class App {
  counter = 0;

  // 2. inject ChangeDetectorRef here
  readonly changeDetector = inject(ChangeDetectorRef);

  constructor() {
    setInterval(() => {
      this.counter++;
      console.log('Counter:', this.counter);
    }, 1000);

    // 3. Add another interval that calls detectChanges() every 5 seconds
    setInterval(() => {
      // forces change detection checks for updates every 5 seconds
      this.changeDetector.detectChanges();
    }, 5000)
  }
}