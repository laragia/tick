import { Component, OnInit, } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material'
import { TickDialogComponent } from './tick-dialog/tick-dialog.component'
import { Tick } from './tick.model'

@Component({
  selector: 'app-tick',
  templateUrl: './tick.component.html',
  styleUrls: ['./tick.component.css']
})
export class TickComponent implements OnInit {
  private ticks: Tick[] = [];
  constructor(private matDialog: MatDialog) {
  }

  ngOnInit() {
    // TODO read local storage
    this.ticks = JSON.parse(localStorage.getItem('ticks'));

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

{
  let t = { place: 'Kerns', date: new Date(), reminder: true, bodyLocation: 'head'};
  let t2 = {};
  t2.place = 'shgfhjsgfj';
  this.ticks.push(t);
  this.ticks.push(t2);
  // TODO save in local storage
  localStorage.setItem('ticks', JSON.stringify(this.ticks));
}


}
