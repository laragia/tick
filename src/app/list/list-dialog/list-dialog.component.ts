import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-list-dialog',
  templateUrl: './list-dialog.component.html',
  styleUrls: ['./list-dialog.component.css']
})
export class ListDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ListDialogComponent>) { }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }

}
