import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { Tick } from '../tick.model'
import * as moment from 'moment';
import 'moment/locale/de';

@Component({
  selector: 'app-tick-dialog',
  templateUrl: './tick-dialog.component.html',
  styleUrls: ['./tick-dialog.component.css']
})
export class TickDialogComponent {
  tick: Tick = { place: '', date: new Date(), reminder: false };

  constructor(
    private dialogRef: MatDialogRef<TickDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  close() {
    this.dialogRef.close();
  }

  refresh(): void {
    window.location.reload();
  }

  save() {
    //this.tick.place = this.place;
    this.dialogRef.close(this.tick);
    this.refresh();
  }
}
