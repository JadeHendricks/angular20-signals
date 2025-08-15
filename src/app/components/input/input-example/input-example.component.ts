import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputChildExampleComponent } from '../input-child-example/input-child-example.component';
import { CommonModule } from '@angular/common';
import { RATES } from '../rates';

@Component({
  selector: 'app-input-example',
  imports: [InputChildExampleComponent, CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './input-example.component.html',
  styleUrl: './input-example.component.scss'
})
export class InputExampleComponent {
  readonly curriencies = Object.keys(RATES);

  amount = new FormControl(100);
  currency = new FormControl('USD');
}

