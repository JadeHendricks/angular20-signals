import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-reactive-context-effects',
  imports: [],
  templateUrl: './reactive-context-effects.html',
  styleUrl: './reactive-context-effects.scss'
})
export class ReactiveContextEffects {
  readonly x = signal(10);
  readonly isLarge = signal(false);
  
  constructor() {
    effect(() => {
      if (this.x() > 12) {
        console.warn('X is greater than 12:', this.x());
        // this will throw an error "signals are not allowed in a computed or effect by default"
        // but seeing as these are not really related to one another and it's clear what's happening, this should be okay (Let's solve it)
        // however this is still not correct and should be done like this - readonly isLarge = computed(() => this.x() > 12);
        this.isLarge.set(true)
      }
    }, { allowSignalWrites: true });
  }

  public increment() {
    this.x.update(value => value + 1);
  }
}
