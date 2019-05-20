import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ListDialogComponent} from './list-dialog/list-dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: string[] = ['Kompass', 'Badge', 'Postenbeschreibungsmäppchen'];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.list = JSON.parse(localStorage.getItem('list'));
    if (this.list == null) {
      this.list = [];
    }
  }

  newItem(): void {
    const dialogRef = this.dialog.open(ListDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('result: ' + result);
      if (result !== undefined) {
        console.log('list: ' + JSON.stringify(result));
        // this.ticks.push(result);
        this.list = [...this.list, result];
        localStorage.setItem('list', JSON.stringify(this.list));
      } else {
        console.log('CLOSE');
      }
    });
  }

}


