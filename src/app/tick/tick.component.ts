import { Component, OnInit, } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { TickDialogComponent } from './tick-dialog/tick-dialog.component';
import { Tick } from './tick.model';
import { ViewChild, ElementRef } from '@angular/core';
import { PushNotificationsService } from './notification.service';
import * as moment from 'moment';
import 'moment/locale/pt-br';

@Component({
  selector: 'app-tick',
  templateUrl: './tick.component.html',
  styleUrls: ['./tick.component.css']
})
export class TickComponent implements OnInit {
  private ticks: Tick[] = [];

  constructor(private matDialog: MatDialog, private notificationService: PushNotificationsService)
  {
    this.notificationService.requestPermission();
  }

  ngOnInit() {
    this.ticks = JSON.parse(localStorage.getItem('ticks'));
    if (this.ticks == null) {
      this.ticks = [];
      }
    this.checkTicks();

  }

  newTick() {
    console.log("newTick()");
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


  pushNotification() {
    console.log('PushNotification');
    let data: Array <any> = [];
    data.push({'title': 'Erinnerung',
      'alertContent': 'Bitte kontrollieren sie ihre Zecken!'});
    this.notificationService.generateNotification('Zecken', 'Bitte kontrillieren sie ihre Zecken!');

  }

  checkTicks() {
    let checkDate = moment().subtract(3, 'week');
    this.ticks.forEach(function(tick){
      if (tick.reminder) {
        if (moment(tick.date) > checkDate ) {
          this.pushNotification();
        }
      }

    }, this);

  }





}
