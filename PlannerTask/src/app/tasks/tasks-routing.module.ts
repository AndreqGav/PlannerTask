import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskRegisterComponent} from "./task-register/task-register.component";


const routes: Routes = [
  {
    path: '',
    component: TaskRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
