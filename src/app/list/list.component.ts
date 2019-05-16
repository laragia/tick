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
  list: string[] = ['Kompass', 'Badge', 'Postenbeschreibungsmäppchen', 'OL-Schuhe', 'GA'];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  newItem(): void {
    const dialogRef = this.dialog.open(ListDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}


