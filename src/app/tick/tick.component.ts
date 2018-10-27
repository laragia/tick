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
    this.ticks = JSON.parse(localStorage.getItem('ticks'));
    if (this.ticks == null) {
      this.ticks = [];
    }

  }

  newTick() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      place: 'example'
    };

    const dialogRef = this.matDialog.open(TickDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        console.log('tick: ' + JSON.stringify(result));
        this.ticks.push(result);
        localStorage.setItem("ticks", JSON.stringify(this.ticks));
        // TODO aktualisieren?
      } else {
        console.log('CLOSE');
      }
    });
  }
}
