import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  articles = [
    {
      id: 1,
      picture: '',
      title: 'Title Here'
    },
    {
      id: 2,
      picture: '',
      title: 'Title Here'
    },
    {
      id: 3,
      picture: '',
      title: 'Title Here'
    },
    {
      id: 4,
      picture: '',
      title: 'Title Here'
    },
    {
      id: 5,
      picture: '',
      title: 'Title Here'
    },
    {
      id: 6,
      picture: '',
      title: 'Title Here'
    },
    {
      id: 7,
      picture: '',
      title: 'Title Here'
    },
    {
      id: 8,
      picture: '',
      title: 'Title Here'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
