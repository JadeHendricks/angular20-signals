import { Component, DestroyRef, inject, Injector, runInInjectionContext } from '@angular/core';
import { startCounting } from '../utils';

@Component({
  selector: 'app-counter',
  imports: [],
  standalone: true,
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter {
  private injector = inject(Injector);

  constructor() {
    // this works becuase we are calling it in the accepted context
    // startCounting();
  }

  ngOnInit() {
    // this allows us to call it in a different context
    // and still have access to the injector
    runInInjectionContext(this.injector, () => {
      startCounting();
    });
  }
}
