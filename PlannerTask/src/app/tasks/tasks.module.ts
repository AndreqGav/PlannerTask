import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskRegisterComponent } from './task-register/task-register.component';
import { TaskFormComponent } from './task-form/task-form.component';

import { MatTableModule, MatTabsModule, MatFormFieldModule, MatInputModule } from '@angular/material'
import { MatPaginatorModule } from '@angular/material';
import {DataBaseTableComponent} from "../_shared/data-base-table/data-base-table.component";
import { ReactiveFormsModule } from '@angular/forms';
import {TaskService} from "./_services/task.service";

//todo: сделать SharedModule с импортом angular/material
@NgModule({
  declarations: [ TaskRegisterComponent, TaskFormComponent, DataBaseTableComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [
    TaskService
  ]
})
export class TasksModule { }
