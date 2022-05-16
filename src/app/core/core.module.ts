import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { routing } from './core-routing.module';
import { CoreComponent } from './core.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../global/filter.pipe';



@NgModule({
  declarations: [
    DashboardComponent,
    CoreComponent,
    HeaderComponent,
    TasksComponent,
    FilterPipe
  ],
  imports: [
    routing,
    CommonModule,
    FormsModule
  ]
})
export class CoreModule { }
