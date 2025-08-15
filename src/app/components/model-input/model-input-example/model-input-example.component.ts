import { Component } from '@angular/core';
import { ModelInputChildExampleComponent } from '../model-input-child-example/model-input-child-example.component';
import { ModelInputChildSecondExampleComponent } from '../model-input-child-second-example/model-input-child-second-example.component';

@Component({
  selector: 'app-model-input-example',
  imports: [ModelInputChildExampleComponent, ModelInputChildSecondExampleComponent],
  standalone: true,
  templateUrl: './model-input-example.component.html',
  styleUrl: './model-input-example.component.scss'
})
export class ModelInputExampleComponent {
 public parentCount: number = 0;
 public darkMode: boolean = false;
}
