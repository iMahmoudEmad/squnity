import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title = 'Squnity';
  navbarLinks = [
    {name: 'Home', link: ''},
    {name: 'About US', link: 'about'},
    {name: 'Services', link: 'services'},
    {name: 'Training', link: 'training'},
    {name: 'Team', link: 'team'},
    {name: 'Blog', link: 'blog'},
    {name: 'Contact Us', link: 'contact'}
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
