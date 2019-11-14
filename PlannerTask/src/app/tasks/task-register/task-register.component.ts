import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {ITaskRegistryView} from '../_models/task-registry-view';
import {ITaskView} from "../_models/task-view";
import {TaskService} from "../_services/task.service";

// todo: мб сделать резолвер для регистра

@Component({
  selector: 'app-task-register',
  templateUrl: './task-register.component.html',
  styleUrls: ['./task-register.component.scss']
})
export class TaskRegisterComponent implements OnInit {

  dataSource: MatTableDataSource<ITaskRegistryView>;

  columns: any[] = [];
  displayedColumns: string[] = [];
  selectedValue: ITaskView;

  constructor(private service: TaskService) {
    this.displayedColumns = this.getDisplayedColumns();
  }

  ngOnInit() {
    // если не получится взять из БД, то раскоментить здесь и закоментить this.getDataSource();
    // this.dataSource = new MatTableDataSource<ITaskRegistryView>(ELEMENT_DATA);
    this.getDataSource();

    this.columns = [
      {
        columnDef: 'header',
        header: 'Заголовок',
        cell: (row: ITaskRegistryView) => `${row.header}`
      },
      {
        columnDef: 'date',
        header: 'Дата',
        cell: (row: ITaskRegistryView) => `${row.date}`
      },
      {
        columnDef: 'state',
        header: 'Состояние',
        cell: (row: ITaskRegistryView) => `${row.state}`
      },
      {
        columnDef: 'priority',
        header: 'Приоритет',
        cell: (row: ITaskRegistryView) => `${row.priority}`
      },
    ];
  }

  private getDisplayedColumns() {
    return ['header', 'date', 'state', 'priority'];
  }

  onRowClick(args) {
    // если не получится взять из БД, то раскоментить здесь и закоментить остальное содержимое этого метода
    //this.selectedValue = ELEMENT_FORM_DATA;

    const id = args.record.id;
    this.service.getById<ITaskView>(id).subscribe(
      data => {
        this.selectedValue = data;
      },
      () => {}
    );
  }

  private getDataSource() {
    this.service.getAll<ITaskView[]>().subscribe(data => {
      this.dataSource = new MatTableDataSource<ITaskRegistryView>(data);
      this.selectedValue = null;
    });
  }

  onFormClosed() {
    this.selectedValue = null;
    this.getDataSource();
  }
}

// не нужно
const ELEMENT_DATA: ITaskRegistryView[] = [
  {id: '0', date: new Date().toDateString(), header: 'заголовок_1', priority: 'низкий', state: 'В работе'},
  {id: '1', date: new Date().toDateString(), header: 'заголовок_2', priority: 'средний', state: 'Завершен'},
  {id: '2', date: new Date().toDateString(), header: 'заголовок_3', priority: 'высокий', state: 'В работе'},
  {id: '3', date: new Date().toDateString(), header: 'заголовок_4', priority: 'средний', state: 'Отменен'},
  {id: '4', date: new Date().toDateString(), header: 'заголовок_5', priority: 'низкий', state: 'В работе'},
  {id: '5', date: new Date().toDateString(), header: 'заголовок_6', priority: 'средний', state: 'В работе'},
  {id: '6', date: new Date().toDateString(), header: 'заголовок_7', priority: 'средний', state: 'Завершен'},
  {id: '7', date: new Date().toDateString(), header: 'заголовок_8', priority: 'высокий', state: 'В работе'},
  {id: '8', date: new Date().toDateString(), header: 'заголовок_9', priority: 'низкий', state: 'В работе'},
  {id: '9', date: new Date().toDateString(), header: 'заголовок_10', priority: 'средний', state: 'Завершен'},
  {id: '10', date: new Date().toDateString(), header: 'заголовок_11', priority: 'низкий', state: 'Завершен'},
  {id: '11', date: new Date().toDateString(), header: 'заголовок_12', priority: 'средний', state: 'В работе'},
  {id: '12', date: new Date().toDateString(), header: 'заголовок_13', priority: 'средний', state: 'Завершен'},
  {id: '12', date: new Date().toDateString(), header: 'заголовок_14', priority: 'низкий', state: 'В работе'},
  {id: '14', date: new Date().toDateString(), header: 'заголовок_15', priority: 'высокий', state: 'Отменен'},
  {id: '15', date: new Date().toDateString(), header: 'заголовок_16', priority: 'средний', state: 'Завершен'},
  {id: '16', date: new Date().toDateString(), header: 'заголовок_17', priority: 'средний', state: 'В работе'},
];

// не нужно
const ELEMENT_FORM_DATA : ITaskView = {
  header: 'лечь спать',
  date: new Date().toDateString(),
  description: 'хочу спать',
  id: '111',
  priority: 'высокий',
  state: 'никогда не выполнится'
}
