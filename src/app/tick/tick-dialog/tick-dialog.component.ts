import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material'


@Component({
  selector: 'app-tick-dialog',
  templateUrl: './tick-dialog.component.html',
  styleUrls: ['./tick-dialog.component.css']
})
export class TickDialogComponent {

  constructor(  @Inject(MAT_DIALOG_DATA) public data: any) { }
}
