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
      image: './assets/img/about/brain.png',
      title: 'Service Name',
      description: 'while most people enjoy casino gambiling, sports betting lottery and bingo playing.'
    },
    {
      icon: 'fas fa-shield-alt',
      image: './assets/img/about/compliance.png',
      title: 'Service Name',
      description: 'while most people enjoy casino gambiling, sports betting lottery and bingo playing.'
    },
    {
      icon: 'fas fa-mask',
      image: './assets/img/about/gem.png',
      title: 'Service Name',
      description: 'while most people enjoy casino gambiling, sports betting lottery and bingo playing.'
    },
    {
      icon: 'fas fa-bug',
      image: './assets/img/about/hunted_skull.png',
      title: 'Service Name',
      description: 'while most people enjoy casino gambiling, sports betting lottery and bingo playing.'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
