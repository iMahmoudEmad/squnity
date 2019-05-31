import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hall-of-fame',
  templateUrl: './hall-of-fame.component.html',
  styleUrls: ['./hall-of-fame.component.scss']
})
export class HallOfFameComponent implements OnInit {
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
