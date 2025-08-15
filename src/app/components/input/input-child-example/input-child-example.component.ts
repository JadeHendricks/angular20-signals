import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RATES } from '../rates';

@Component({
  selector: 'app-input-child-example',
  imports: [CommonModule],
  templateUrl: './input-child-example.component.html',
  styleUrl: './input-child-example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputChildExampleComponent {

  // If you want the parent to bind using a different name (alias), you can do this:
  // readonly amount = input.required<number>({ alias: 'value' });
  // you'd write: <app-input-child-example [value]="amount.value!" />

  // Angular’s new signal-based @Input API
  // The .required means the parent must provide this input, otherwise Angular will throw an error.
  // Since it’s a signal, you call it like a function (this.amount()), not like a normal property.
  // Allows to use computed instead on ngOnchanges as well.
  readonly amount = input.required<number>();
  readonly currency = input.required<string>();

  readonly rate = computed(() => RATES[this.currency()]);
  readonly converted = computed(() => this.amount() * this.rate());
}


//Before using @Input()
// export class InputExampleComponent implements OnChanges{
//   @Input() amount = 0;
//   @Input() currency = 'USD';
  
//   rate = 1;
//   converted = 0;

//   ngOnChanges() {
//     this.rate = RATES[this.currency];
//     this.converted = this.amount * this.rate;
//   }
// }
