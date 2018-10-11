import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'



@Component({
  selector: 'app-tick-dialog',
  templateUrl: './tick-dialog.component.html',
  styleUrls: ['./tick-dialog.component.css']
})
export class TickDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<TickDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  save() {
    this.dialogRef.close();
  }

}
