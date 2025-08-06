import { Component, computed, effect, signal } from '@angular/core';
import { customSignal } from './custom-signal';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // 1. replace with a writeable signal with an initial value of 0
  readonly firstNumber = signal<number>(0); 

  // 2. replace with a writeable signal with an initial value of 0
  readonly secondNumber = signal<number>(0);;

  // 3. replace with a computed signal that emits the sum of the first and second numbers
  readonly sum = computed(() => this.firstNumber() + this.secondNumber());

  setSecondSignalTo10() {
    // 4. set the second number signal to 10
    this.secondNumber.set(10);
  }

  incrementFirstSignal() {
    // 5. increment the first number signal by 1 but only if it's less than 10
    this.firstNumber.update((value) => value < 10 ? value + 1 : value);
  }

  incrementBothSignals() {
    // 6. increment both number signals by 1 with a maximum of 10
      this.firstNumber.update((value) => value < 10 ? value + 1 : value);
      this.secondNumber.update((value) => value < 10 ? value + 1 : value);
  }


  constructor() {
    // 7. Define an effect that displays both signals to the console whenever any of them changes
    effect(() => {
      console.log('First Number - ', this.firstNumber())
      console.log('Second Number - ', this.secondNumber())
    })
  }
}


// more code
// export class App {
//   protected readonly title = signal('03-fun-with-signals');

//   readonly firstSignal = signal(42);
//   readonly secondSignal = customSignal('Hello World from custom signal');
//   readonly thirdSignal = signal(10);

//   // computed signal
//   // whenever firstSignal changes, derivedSignal will also change
//   readonly derivedSignal = computed(() => this.firstSignal() * 10);
//   readonly derivedSignalTwo = computed(() => this.firstSignal() + this.thirdSignal());

//   public setSignal() {
//     this.firstSignal.set(100);
//     // Note: This will not trigger change detection for the firstSignal
//   }

//   public incrementFirstSignal() {
//     this.firstSignal.update(value => value + 1);
//     // Note: This will not trigger change detection for the firstSignal
//   }

//   constructor() {
//     console.log('First Signal:', this.firstSignal());
//     console.log('Second Signal:', this.secondSignal());
//   }
// }
