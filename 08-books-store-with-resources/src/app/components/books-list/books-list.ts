import { Component, inject, signal } from '@angular/core';
import { Busy } from "../busy/busy";
import { StateService } from '../../serivces/state-service';

@Component({
  selector: 'app-books-list',
  imports: [Busy],
  templateUrl: './books-list.html',
  styleUrl: './books-list.scss',
})
export class BooksList {
  readonly state = inject(StateService)
}
