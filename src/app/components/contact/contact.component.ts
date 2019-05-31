import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // google maps zoom level
  zoom = 12;

  // initial center position for the map
  lat = 51.673858;
  lng = 7.815982;
  informations = [
    {
      icon: 'map-marker-alt',
      data: 'Cairo, Egypt'
    },
    {
      icon: 'map-marker-alt',
      data: 'info@squnity.com'
    },
    {
      icon: 'map-marker-alt',
      data: '0111 222 3333'
    },
    {
      icon: 'map-marker-alt',
      data: 'test test test'
    },
    {
      icon: 'map-marker-alt',
      data: 'test test test'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
