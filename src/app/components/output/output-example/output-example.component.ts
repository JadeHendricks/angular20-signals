import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OutputChildExampleComponent } from '../output-child-example/output-child-example.component';
import { OutputChildSecondExampleComponent } from '../output-child-second-example/output-child-second-example.component';

@Component({
  selector: 'app-output-example',
  imports: [CommonModule, ReactiveFormsModule, OutputChildExampleComponent, OutputChildSecondExampleComponent],
  standalone: true,
  templateUrl: './output-example.component.html',
  styleUrl: './output-example.component.scss'
})
export class OutputExampleComponent {
  public onChildClick(message: string): void {
    console.log('Received from child:', message);
  }

  public onTick(message: string): void {
    console.log('Timer event from child:', message);
  }
}
