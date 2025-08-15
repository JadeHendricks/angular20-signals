import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-model-input-child-second-example',
  imports: [],
  standalone: true,
  templateUrl: './model-input-child-second-example.component.html',
  styleUrl: './model-input-child-second-example.component.scss'
})
export class ModelInputChildSecondExampleComponent {
  readonly checked = model<boolean>();

  // Child updates its signal checked.set(...).
  // That triggers a checked changed back to the parent, updating darkMode.
  public onToggle(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.checked.set(input.checked);
  }
}
