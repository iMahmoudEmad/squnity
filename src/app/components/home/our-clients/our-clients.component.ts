import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-our-clients',
  templateUrl: './our-clients.component.html',
  styleUrls: ['./our-clients.component.scss']
})
export class OurClientsComponent implements OnInit {
  owlConfig = {
    items: 5,
    dots: false,
    nav: true,
    autoplay: true,
    loop: true,
    margin: 20
  };

  constructor() {
  }

  ngOnInit() {
  }

}
