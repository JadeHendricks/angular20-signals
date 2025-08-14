import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => 
            import('./components/writeable-signal/writeable-signal-example/writeable-signal-example.component')
            .then(c => c.WriteableSignalExampleComponent)
    }
];