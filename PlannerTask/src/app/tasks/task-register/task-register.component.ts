import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {ITaskRegistryView} from '../_models/task-registry-view';
import {state} from '@angular/animations';

@Component({
  selector: 'app-task-register',
  templateUrl: './task-register.component.html',
  styleUrls: ['./task-register.component.scss']
})
export class TaskRegisterComponent implements OnInit {

  displayedColumns: string[] = ['header', 'date', 'state', 'priority'];
  dataSource = new MatTableDataSource<ITaskRegistryView>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}
const ELEMENT_DATA: ITaskRegistryView[] = [
  {id:'0', date: new Date().toDateString(), header: 'заголовок_1', priority: 'низкий', state: 'В работе'},
  {id:'1', date: new Date().toDateString(), header: 'заголовок_2', priority: 'средний', state: 'Завершен'},
  {id:'2', date: new Date().toDateString(), header: 'заголовок_3', priority: 'высокий', state: 'В работе'},
  {id:'3', date: new Date().toDateString(), header: 'заголовок_4', priority: 'средний', state: 'Отменен'},
  {id:'4', date: new Date().toDateString(), header: 'заголовок_5', priority: 'низкий', state: 'В работе'},
  {id:'5', date: new Date().toDateString(), header: 'заголовок_6', priority: 'средний', state: 'В работе'},
  {id:'6', date: new Date().toDateString(), header: 'заголовок_7', priority: 'средний', state: 'Завершен'},
  {id:'7', date: new Date().toDateString(), header: 'заголовок_8', priority: 'высокий', state: 'В работе'},
  {id:'8', date: new Date().toDateString(), header: 'заголовок_9', priority: 'низкий', state: 'В работе'},
  {id:'9', date: new Date().toDateString(), header: 'заголовок_10', priority: 'средний', state: 'Завершен'},
  {id:'10', date: new Date().toDateString(), header: 'заголовок_11', priority: 'низкий', state: 'Завершен'},
  {id:'11', date: new Date().toDateString(), header: 'заголовок_12', priority: 'средний', state: 'В работе'},
  {id:'12', date: new Date().toDateString(), header: 'заголовок_13', priority: 'средний', state: 'Завершен'},
  {id:'12', date: new Date().toDateString(), header: 'заголовок_14', priority: 'низкий', state: 'В работе'},
  {id:'14', date: new Date().toDateString(), header: 'заголовок_15', priority: 'высокий', state: 'Отменен'},
  {id:'15', date: new Date().toDateString(), header: 'заголовок_16', priority: 'средний', state: 'Завершен'},
  {id:'16', date: new Date().toDateString(), header: 'заголовок_17', priority: 'средний', state: 'В работе'},


];
