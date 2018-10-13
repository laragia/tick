import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { Tick } from '../tick.model'

@Component({
  selector: 'app-tick-dialog',
  templateUrl: './tick-dialog.component.html',
  styleUrls: ['./tick-dialog.component.css']
})
export class TickDialogComponent {
  tick: Tick = {place:'', date: new Date(), reminder: false, bodyLocation: ''};

  constructor(
    private dialogRef: MatDialogRef<TickDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    //this.tick.place = this.place;
    this.dialogRef.close(this.tick);
  }
}
