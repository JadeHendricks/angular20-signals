import { Component, input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-routing-input-data-child-example',
  imports: [],
  standalone: true,
  templateUrl: './routing-input-data-child-example.component.html',
  styleUrl: './routing-input-data-child-example.component.scss'
})
export class RoutingInputDataChildExampleComponent {
  // With signal input binding
  // if the route param is called id, we need to call out input here ID as well.
  // we can use transform here to convert the input into a number
  readonly id = input.required({transform: numberAttribute});
}


// Before
// export class RoutingInputDataChildExampleComponent implements OnInit, OnDestroy {
//   private route = inject(ActivatedRoute);
//   private id: number = 0;
//   private idSubscription?: Subscription;

//   ngOnInit(): void {
//     this.idSubscription = this.route.paramMap.subscribe(params => {
//       this.id = Number(params.get('id')) ?? 0;
//       console.log('Route param changed →', this.id);
//     });
//   }

//   ngOnDestroy() {
//     this.idSubscription?.unsubscribe(); // clean up
//   }
// }
