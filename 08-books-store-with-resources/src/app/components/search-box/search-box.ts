import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StateService } from '../../serivces/state-service';

@Component({
  selector: 'app-search-box',
  imports: [FormsModule],
  templateUrl: './search-box.html',
  styleUrl: './search-box.scss'
})
export class SearchBox {
  readonly state = inject(StateService);
}
