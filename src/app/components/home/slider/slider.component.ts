import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  owlConfig = {
    items: 1,
    dots: false,
    nav: true
  };

  slider = [
    {
      image: 'img.jpg',
      title: 'Title Here',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deleniti error incidunt numquam provident. Architecto asperiores assumenda, dolorem error explicabo facilis, illo incidunt ipsa mollitia natus numquam, quis reprehenderit repudiandae!'
    },
    {
      image: 'img.jpg',
      title: 'Title Here',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deleniti error incidunt numquam provident. Architecto asperiores assumenda, dolorem error explicabo facilis, illo incidunt ipsa mollitia natus numquam, quis reprehenderit repudiandae!'
    },
    {
      image: 'img.jpg',
      title: 'Title Here',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deleniti error incidunt numquam provident. Architecto asperiores assumenda, dolorem error explicabo facilis, illo incidunt ipsa mollitia natus numquam, quis reprehenderit repudiandae!'
    },
    {
      image: 'img.jpg',
      title: 'Title Here',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deleniti error incidunt numquam provident. Architecto asperiores assumenda, dolorem error explicabo facilis, illo incidunt ipsa mollitia natus numquam, quis reprehenderit repudiandae!'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
