import { Component, effect, EffectRef, inject, Injector, signal } from '@angular/core';

@Component({
  selector: 'app-counter-two',
  imports: [],
  templateUrl: './counter-two.html',
  styleUrl: './counter-two.scss'
})
export class CounterTwo {
  readonly value = signal(0);
  readonly injector = inject(Injector);

  ef: EffectRef | null = null;

  constructor() {
    const int = setInterval(() => {
      this.value.update(value => value + 1);
    }, 1000);
  }

  public go() {
    if (this.ef)  return;

    this.ef = effect(() => {
      console.log('From effect: ', this.value());
    }, {injector: this.injector});
  }

  // this is showing how you can manage the effect lifecycle
  // this allows us to stop the effect manually if ever required (Example)
  public stop() {
    if (this.ef) {
      this.ef.destroy();
      this.ef = null;
    }
  }
}
