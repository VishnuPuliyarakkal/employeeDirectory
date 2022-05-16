import { CoreComponent } from './core/core.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }, {
    path: 'core',
    component: CoreComponent,
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule),
    canActivate: [AuthGuard]
  },
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes)
