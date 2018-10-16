import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TickTableDataSource } from './tick-table-datasource';

@Component({
  selector: 'app-tick-table',
  templateUrl: './tick-table.component.html',
  styleUrls: ['./tick-table.component.css']
})
export class TickTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TickTableDataSource;

  displayedColumns = ['place', 'date'];

  ngOnInit() {
    this.dataSource = new TickTableDataSource(this.paginator, this.sort);
  }
}
