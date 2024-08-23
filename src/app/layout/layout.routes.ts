import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';

export const layoutRoutes: Routes = [{
    path: '',
    component: MainLayoutComponent,
    children: [
        {
            path: 'teams',
            loadChildren: () =>
                import('../features/teams/teams.routes').then((m) => m.teamsRoutes),
        },
    ],
}];
