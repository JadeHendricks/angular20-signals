import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => 
            import('./components/writeable-signal/writeable-signal-example.component')
            .then(c => c.WriteableSignalExampleComponent)
    },
    {
        path: 'computed-signal',
        loadComponent: () => 
            import('./components/computed-signal/computed-signal-example.component')
            .then(c => c.ComputedSignalExampleComponent)
    },
    {
        path: 'effect',
        loadComponent: () => 
            import('./components/effect/effect-example.component')
            .then(c => c.EffectExampleComponent)
    },
    {
        path: 'linked-signal',
        loadComponent: () => 
            import('./components/linked-signal/linked-signal-example.component')
            .then(c => c.LinkedSignalExampleComponent)
    },
    {
        path: 'to-signal',
        loadComponent: () => 
            import('./components/to-signal/to-signal-example.component')
            .then(c => c.ToSignalExampleComponent)
    },
    {
        path: 'to-observable',
        loadComponent: () => 
            import('./components/to-observable/to-observable-example.component')
            .then(c => c.ToObservableExampleComponent)
    },
    {
        path: 'input',
        loadComponent: () => 
            import('./components/input/input-example/input-example.component')
            .then(c => c.InputExampleComponent)
    },
];