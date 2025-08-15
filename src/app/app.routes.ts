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
        .then(m => m.LinkedSignalExampleComponent),
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
    {
        path: 'output',
        loadComponent: () => 
            import('./components/output/output-example/output-example.component')
            .then(c => c.OutputExampleComponent)
    },
    {
        path: 'model-input',
        loadComponent: () => 
            import('./components/model-input/model-input-example/model-input-example.component')
            .then(c => c.ModelInputExampleComponent)
    },
    {
        path: 'routing',
        loadComponent: () =>
        import('./components/routing/routing-input-data-example/routing-input-data-example.component')
            .then(c => c.RoutingInputDataExampleComponent)
    },

        {
        path: 'routing/:id',
        loadComponent: () =>
        import('./components/routing/routing-input-data-child-example/routing-input-data-child-example.component')
            .then(c => c.RoutingInputDataChildExampleComponent)
    },
];