import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  services = [
    'vulnerability assessment',
    'Nework & Infrastructure Penetration Testing',
    'Web Application Penetration Testing',
    'Mobile Application Penetration Testing',
    'Wireless Penetration Testing',
    'Source Code Review',
    'Malware Analysis',
    'Secure Software Development',
    'Incident Handling And Forensics'
  ];

  menu = [
    {name: 'home', link: ''},
    {name: 'about us', link: 'about'},
    {name: 'services', link: 'services'},
    {name: 'training', link: 'training'},
    {name: 'team', link: 'team'},
    {name: 'blog', link: 'blog'},
    {name: 'contact us', link: 'contact'},
  ];

  socialLinks = [
    {link: '####', icon: 'facebook'},
    {link: '####', icon: 'twitter'},
    {link: '####', icon: 'linkedin'},
    {link: '####', icon: 'instagram'},
    {link: '####', icon: 'youtube'}
  ];

  date = new Date();

  constructor() {
  }

  ngOnInit() {
  }

}
