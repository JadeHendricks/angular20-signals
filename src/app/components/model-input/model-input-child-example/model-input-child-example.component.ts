import { Component, model } from '@angular/core';

@Component({
  selector: 'app-model-input-child-example',
  imports: [],
  standalone: true,
  templateUrl: './model-input-child-example.component.html',
  styleUrl: './model-input-child-example.component.scss'
})
export class ModelInputChildExampleComponent {
  // this creates:
  // An input: @Input() count: number
  // An output: @Output() countChange = new EventEmitter<number>()
  // But exposed as a signal, so you call it like this.count() in the child.
  readonly count = model<number>();

  // Angular updates the signal inside the child.
  // At the same time, it emits the new value through countChange[the eventEmitter].
  // That output event updates parentCount in the parent.
  public increment(): void {
    this.count.update(v => (v ?? 0) + 1);
  }
}
