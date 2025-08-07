import { DestroyRef, inject } from "@angular/core";
import { interval } from "rxjs";

// we are able to use the injector here because we are in the accepted DI context
export function startCounting(destroyRef: DestroyRef = inject(DestroyRef)) {
    const sub = interval(1000).subscribe(console.log);
    destroyRef.onDestroy(() => sub.unsubscribe());
}