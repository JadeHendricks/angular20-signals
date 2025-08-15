import { CommonModule } from '@angular/common';
import { Component, linkedSignal, signal } from '@angular/core';

type ShippingOption = { id: number; name: string };

@Component({
  selector: 'app-linked-signal-example',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './linked-signal-example.component.html',
  styleUrl: './linked-signal-example.component.scss'
})
export class LinkedSignalExampleComponent {
  // options is the source of truth coming from (say) an API.
  // Read with options(); update with options.set(...).
  // This can change over time (e.g., the backend returns a different set of options).
  public options = signal<ShippingOption[]>([
    { id: 1, name: 'Ground' },
    { id: 2, name: 'Air' },
    { id: 3, name: 'Sea' },
  ]);

  // Linked signal: keeps user choice if still valid, otherwise resets
  // ties this linked signal to options. Whenever options changes, Angular re-runs computation.
  // opts = current options() value.
  // prev = the linked signal’s last state and the last source snapshot ({ source, value }), or undefined on the first run.
  // We pull prevId (the previously chosen ID).
  // stillValid checks if that ID still exists in the new opts.
  // If still valid, keep it; otherwise reset to a safe default (first option’s id or null if empty).

  // Key behavior: selectedId is writable (you can call selectedId.set(...) from the template when the user picks an option), 
  // and it will auto-recompute when options changes. If the user’s prior choice disappears, it self-corrects to a valid value.
  public selectedId = linkedSignal<ShippingOption[], number | null>({
    source: this.options,
    computation: (opts, prev) => {
      const prevId = prev?.value ?? null;
      const stillValid = opts.some(o => o.id === prevId);
      return stillValid ? prevId : (opts[0]?.id ?? null);
    }
  });

  // Simulating a backend change
  // Updates the source list.
  // This triggers the linkedSignal’s computation:
  // If your old selectedId (e.g., 2) is no longer present, selectedId auto-resets to 10.
  // If it’s still present, it stays as-is.
  public swapOptions(): void {
    // New options from backend — old IDs disappear
    this.options.set([
      { id: 10, name: 'Email' },
      { id: 20, name: 'Will Call' },
      { id: 30, name: 'Postal' },
    ]);
  }
}
