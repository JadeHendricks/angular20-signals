import { Component, signal } from '@angular/core';
import { Counter } from './counter/counter';
import { CommonModule } from '@angular/common';
import { CounterTwo } from './counter-two/counter-two';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Counter, CounterTwo],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('05-injection-context');

  public showCounter: boolean = true;

  public toggleCounter() {
    this.showCounter = !this.showCounter;
  }
}
