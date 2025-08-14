import { Component, effect, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-effect-example',
  imports: [],
  templateUrl: './effect-example.component.html',
  styleUrl: './effect-example.component.scss'
})
export class EffectExampleComponent {

  readonly firstSignal = signal<number>(0);

  // The effect rely on signals
  // So we can use the effect to react to changes in signals
  // And perform side effects based on those changes
  // It automatically subscribes and unsubscribes to the signals
  constructor() {
    effect(() => {
      console.log('Effect triggered:', this.firstSignal());
    });
  }

  public updateSignal(): void {
    this.firstSignal.update(value => value + 1);
  }

}
