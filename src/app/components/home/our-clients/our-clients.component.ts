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
    margin: 20,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 4
      },
      1024: {
        items: 5
      }
    }
  };

  constructor() {
  }

  ngOnInit() {
  }

}
