import { TasksComponent } from './tasks/tasks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';



export const routes: Routes = [
  { path: '', component: DashboardComponent, data: { title: 'Employee' } },
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Employee' } },
  { path: 'tasks/:id', component: TasksComponent, data: { title: 'Employee Tasks' } },

]

export const routing: ModuleWithProviders<any> = RouterModule.forChild(routes)
