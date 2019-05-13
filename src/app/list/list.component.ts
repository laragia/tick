import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: string[] = ['Kompass', 'Badge', 'Postenbeschreibungsmäppchen', 'OL-Schuhe', 'GA'];

  constructor() { }

  ngOnInit() {
  }

  newItem() {
    console.log('test');

  }
}


