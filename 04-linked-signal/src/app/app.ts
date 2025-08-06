import { Component, linkedSignal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PRODUCTS } from './products';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly products = signal(['Apple', 'Banana', 'Cherry']);
  /* 1. Create a simple linked signal that sets the selected product to the first
        product in the list., wheven the producy inventory changes */
  /* 2. Change the `linkedSignal` so you use the second signature, supply an object 
        with source and computation properties */
  /* 3. In the computation, use the previous value, to check if the selected product
        is still in the list, if not, set the selected product to the first product in the list */
  
  readonly selectedProduct = linkedSignal<string[], string>({
    // here we are defining the source of the linked signal
    source: this.products, 
    // here we are defining the computation of the linked signal
    // we are using the previous value to check if the selected product is still in the list
    computation: (prod, prev) => {
      if (!prev) return prod[0];
      if (prod.includes(prev.value)) return prev.value;
      return prod[0];
    }
  })

  addProduct() {
    this.products.update(prods => [...prods, PRODUCTS[prods.length]]);
  }

  removeProduct() {
    this.products.update(prods => prods.slice(0, -1));
  }

  nextProduct() {
    this.selectedProduct.update(selected => {
      const index = this.products().indexOf(selected);
      return this.products()[(index + 1) % this.products().length];
    });
  }

  prevProduct() {
    this.selectedProduct.update(selected => {
      const index = this.products().indexOf(selected);
      return this.products()[(index - 1 + this.products().length) % this.products().length];
    });
  }
}
