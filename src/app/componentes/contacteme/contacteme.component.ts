import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacteme',
  templateUrl: './contacteme.component.html',
  styleUrls: ['./contacteme.component.css']
})
export class ContactemeComponent implements OnInit {

  lat = -12.1687046;
  lng = -76.918104;

  constructor() { }

  ngOnInit() {
  }

}
