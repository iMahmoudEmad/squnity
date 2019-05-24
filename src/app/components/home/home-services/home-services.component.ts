import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.scss']
})
export class HomeServicesComponent implements OnInit {
  services = [
    {
      icon: 'fas fa-network-wired',
      title: 'Service Name',
      description: 'while most people enjoy casino gambiling, sports betting lottery and bingo playing.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Service Name',
      description: 'while most people enjoy casino gambiling, sports betting lottery and bingo playing.'
    },
    {
      icon: 'fas fa-mask',
      title: 'Service Name',
      description: 'while most people enjoy casino gambiling, sports betting lottery and bingo playing.'
    },
    {
      icon: 'fas fa-bug',
      title: 'Service Name',
      description: 'while most people enjoy casino gambiling, sports betting lottery and bingo playing.'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
