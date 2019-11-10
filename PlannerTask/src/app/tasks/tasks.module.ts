import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskRegisterComponent } from './task-register/task-register.component';
import { TaskFormComponent } from './task-form/task-form.component';

import { MatTableModule } from '@angular/material'
import { MatPaginatorModule } from '@angular/material';

@NgModule({
  declarations: [ TaskRegisterComponent, TaskFormComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class TasksModule { }
