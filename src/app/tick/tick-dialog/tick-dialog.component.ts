import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { Tick } from '../tick.model'
import * as moment from 'moment';
import 'moment/locale/de';

export interface DialogData {
    bodyLocation: string;
}

@Component({
  selector: 'app-tick-dialog',
  templateUrl: './tick-dialog.component.html',
  styleUrls: ['./tick-dialog.component.css']
})
export class TickDialogComponent implements OnInit {
  tick: Tick = { place: '', date: new Date(), reminder: false };

  constructor(private dialogRef: MatDialogRef<TickDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.tick.bodyLocation = data.bodyLocation;
  }

    ngOnInit() {
    }

  close() {
    this.dialogRef.close();
  }

  save() {
    // this.tick.place = this.place;
    this.dialogRef.close(this.tick);

  }
}
