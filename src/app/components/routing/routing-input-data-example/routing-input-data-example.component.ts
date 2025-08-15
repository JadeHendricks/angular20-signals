import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-input-data-example',
  imports: [],
  standalone: true,
  templateUrl: './routing-input-data-example.component.html',
  styleUrl: './routing-input-data-example.component.scss'
})
export class RoutingInputDataExampleComponent {

  private router = inject(Router);
  public randomId: number = 25;

  navigate(): void {
    this.router.navigate(['/routing', this.randomId]);
  }
}
