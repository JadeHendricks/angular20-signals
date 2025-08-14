import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => 
            import('./components/writeable-signal/writeable-signal-example/writeable-signal-example.component')
            .then(c => c.WriteableSignalExampleComponent)
    },
    {
        path: 'computed-signal',
        loadComponent: () => 
            import('./components/computed-signal/computed-signal-example/computed-signal-example.component')
            .then(c => c.ComputedSignalExampleComponent)
    },
    {
        path: 'effect',
        loadComponent: () => 
            import('./components/effect/effect-example/effect-example.component')
            .then(c => c.EffectExampleComponent)
    }
];