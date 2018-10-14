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

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new TickTableDataSource(this.paginator, this.sort);
  }
}
