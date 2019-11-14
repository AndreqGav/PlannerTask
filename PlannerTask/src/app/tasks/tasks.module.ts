import { NgModule } from '@angular/core';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskRegisterComponent } from './task-register/task-register.component';
import { TaskFormComponent } from './task-form/task-form.component';

import {TaskService} from "./_services/task.service";
import {SharedModule} from "../_shared/shared.module";

@NgModule({
  declarations: [ TaskRegisterComponent, TaskFormComponent],
  imports: [
    SharedModule,
    TasksRoutingModule,
  ],
  providers: [
    TaskService
  ]
})
export class TasksModule { }
