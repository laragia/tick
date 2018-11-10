import { Component, OnInit, } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material'
import { TickDialogComponent } from './tick-dialog/tick-dialog.component'
import { Tick } from './tick.model'
import { ViewChild, ElementRef } from '@angular/core';
import {SwPush} from "@angular/service-worker";

@Component({
  selector: 'app-tick',
  templateUrl: './tick.component.html',
  styleUrls: ['./tick.component.css']
})
export class TickComponent implements OnInit {
  private ticks: Tick[] = [];

  readonly VAPID_PUBLIC_KEY = "BP1hP9SQD6cYItHiHobyjOMxdLz1TFfJ57AxLaQX4gvs1jBK5F3Wx1Ud7LRY5WE9ZlIIZyb4-BELQpICIZ2jzR4";

  constructor(
    private matDialog: MatDialog,
    private swPush: SwPush,) {
  }

  ngOnInit() {
    this.ticks = JSON.parse(localStorage.getItem('ticks'));
    if (this.ticks == null) {
      this.ticks = [];
    }

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


  reminder() {

        this.swPush.requestSubscription({
            serverPublicKey: this.VAPID_PUBLIC_KEY
        })
        .then(sub => {

            this.sub = sub;


            console.log("Notification Subscription: ", sub);

            this.newsletterService.addPushSubscriber(sub).subscribe(
                () => console.log('Sent push subscription object to server.'),
                err =>  console.log('Could not send subscription object to server, reason: ', err)
            );

        })
        .catch(err => console.error("Could not subscribe to notifications", err));

    }

}
