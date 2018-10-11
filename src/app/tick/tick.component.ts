import { Component, OnInit, } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material'
import { TickDialogComponent } from './tick-dialog/tick-dialog.component'

@Component({
  selector: 'app-tick',
  templateUrl: './tick.component.html',
  styleUrls: ['./tick.component.css']
})
export class TickComponent implements OnInit {

  constructor(private matDialog: MatDialog) {
  }

  ngOnInit() {
  }

  newTick() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.matDialog.open(TickDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog was closed' + result);
    });

  }
}
