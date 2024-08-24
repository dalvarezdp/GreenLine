import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';

export const layoutRoutes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../features/dashboard/dashboard.routes').then((m) => m.dashboardRoutes),
      },
      {
        path: 'teams',
        loadChildren: () => import('../features/teams/teams.routes').then((m) => m.teamsRoutes),
      },
    ],
  },
];
