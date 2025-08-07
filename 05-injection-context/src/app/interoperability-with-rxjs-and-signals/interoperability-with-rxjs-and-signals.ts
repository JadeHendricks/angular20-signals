import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ApiService } from '../services/api';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-interoperability-with-rxjs-and-signals',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './interoperability-with-rxjs-and-signals.html',
  styleUrl: './interoperability-with-rxjs-and-signals.scss'
})
export class InteroperabilityWithRxjsAndSignals {
  readonly number = signal(10);
  readonly number$ = toObservable(this.number);

  readonly results$ = this.number$.pipe(
    switchMap(n => this.api.getPrimeFactors(n))
  )

  readonly api = inject(ApiService);

  // seeing as this is from an observable the value could be value or undefined, so we can pass an inital value as a option
  readonly primeFactors = toSignal(this.results$, {
    initialValue: [],
    manualCleanup: false, // this is the default, but we can set it to true if we want to manually clean up the signal
    // requireSync: true if this is used here we are telling angular that we garuantee that there is an initial value and no undefined.
  })

  constructor() {
    this.number$.subscribe(n => {
      console.log('Number change to', n);
    })
  }

  increase() {
    this.number.update(n => n + 1);
  }

  decrease() {
    this.number.update(n => Math.max(n-1, 3));
  }
}


// before:
// export class InteroperabilityWithRxjsAndSignals {
//   readonly number = signal(10);
//   readonly api = inject(ApiService);

//   readonly primeFactors = signal([1,2,3]);

//   increase() {
//     this.number.update(n => n + 1);
//   }

//   decrease() {
//     this.number.update(n => Math.max(n-1, 3));
//   }
// }
