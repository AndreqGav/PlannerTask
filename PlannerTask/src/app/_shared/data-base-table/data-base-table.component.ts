import { Component, OnInit, Input, Output, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import {IDataBaseTableColumn} from "./data-base-table-column";
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-data-base-table',
  templateUrl: './data-base-table.component.html',
  styleUrls: ['./data-base-table.component.scss',]
})
export class DataBaseTableComponent<M> implements OnInit {

  @Input() displayedColumns: string[];

  private _columns = new Array<IDataBaseTableColumn<M>>();
  public get columns() {
    return this._columns;
  }

  @Input()
  public set columns(columns) {
    this._columns = columns;
    if(!this.displayedColumns)
      this.displayedColumns = Object.values(columns).map(column => column.columnDef);
  }

  @Input() dataSource: MatTableDataSource<IDataBaseTableColumn<M>>;

  @Output() rowClickEvent = new EventEmitter();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort; // todo: доделать, а то не получается сортировка

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  rowClick(record, column, event){
    this.rowClickEvent.emit({record, column, event});
  }

  getCell(row: M, column: IDataBaseTableColumn<M>): any{
        return column.cell(row);
  }


}

