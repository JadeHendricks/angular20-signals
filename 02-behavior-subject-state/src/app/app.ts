import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, debounceTime, interval, map } from 'rxjs';

type Options = Record<string, string>;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  // 1. set change detection strategy to OnPush
})

export class App {
  readonly counter$ = interval(1000);
  // 2. Remove the counter property and the constructor
  // 3. In the html, bind directly to the counter$ observable using the async pipe


  // Some examples of behaviour subjects
  readonly options$ = new BehaviorSubject<Options>({'r': 'Red', 'g': 'Green', 'b': 'Blue'});
  readonly selectedKey$ = new BehaviorSubject<string>('b');

  readonly selectedValues$ = combineLatest([this.options$, this.selectedKey$]).pipe((
    debounceTime(0), //we need this here in order to schedule when the stack is empty, alllow other functions to run first i.e switchOptions the change instead of running it immediately, prevents an initial undefined when do this with Observables.
    map(([options, key]) => options[key])
  ));

  public switchOptions() {
    this.options$.next({'m': 'Magenta', 'y': 'Yellow', 'c': 'Cyan'});
    this.selectedKey$.next('c');
  }

  constructor() {
    this.selectedValues$.subscribe(console.log)
  }

}
