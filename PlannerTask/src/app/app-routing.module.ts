import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TasksComponent} from "./tasks/tasks.component";


const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
    loadChildren: 'src/app/tasks/tasks.module#TasksModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
