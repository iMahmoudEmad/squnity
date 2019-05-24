import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss']
})
export class HeaderSectionComponent implements OnInit {
  @Input() backgroundImage: any;
  @Input() title: string;

  constructor() {
  }

  ngOnInit() {
  }

}
