import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';

@Component({
  selector: 'app-output-child-example',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './output-child-example.component.html',
  styleUrl: './output-child-example.component.scss'
})
export class OutputChildExampleComponent {

  readonly buttonClicked = output<string>();

  // output() → you control when to .emit().
  public notify(): void {
    this.buttonClicked.emit('Child button clicked!');
  }
}
