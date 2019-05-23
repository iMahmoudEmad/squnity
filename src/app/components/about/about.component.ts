import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  owlConfig = {
    items: 6,
    dots: false,
    nav: true,
    margin: 10,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      900: {
        items: 3
      },
      1024: {
        items: 4
      },
      1366: {
        items: 6
      }
    }
  };

  slider = {
    image: 'client.jpg',
    title: 'Title Here'
  };

  heros = [
    {
      picture: './assets/img/client.jpg',
      name: 'Team Member Name',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, exercitationem, repudiandae. Aperiam debitis deleniti doloremque, esse expedita facilis harum hic ipsa iure laboriosam minus nemo neque sequi voluptate voluptatum. Quas.'
    },
    {
      picture: './assets/img/client.jpg',
      name: 'Team Member Name',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, exercitationem, repudiandae. Aperiam debitis deleniti doloremque, esse expedita facilis harum hic ipsa iure laboriosam minus nemo neque sequi voluptate voluptatum. Quas.'
    },
    {
      picture: './assets/img/client.jpg',
      name: 'Team Member Name',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, exercitationem, repudiandae. Aperiam debitis deleniti doloremque, esse expedita facilis harum hic ipsa iure laboriosam minus nemo neque sequi voluptate voluptatum. Quas.'
    },
    {
      picture: './assets/img/client.jpg',
      name: 'Team Member Name',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, exercitationem, repudiandae. Aperiam debitis deleniti doloremque, esse expedita facilis harum hic ipsa iure laboriosam minus nemo neque sequi voluptate voluptatum. Quas.'
    },
    {
      picture: './assets/img/client.jpg',
      name: 'Team Member Name',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, exercitationem, repudiandae. Aperiam debitis deleniti doloremque, esse expedita facilis harum hic ipsa iure laboriosam minus nemo neque sequi voluptate voluptatum. Quas.'
    },
    {
      picture: './assets/img/client.jpg',
      name: 'Team Member Name',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, exercitationem, repudiandae. Aperiam debitis deleniti doloremque, esse expedita facilis harum hic ipsa iure laboriosam minus nemo neque sequi voluptate voluptatum. Quas.'
    },
    {
      picture: './assets/img/client.jpg',
      name: 'Team Member Name',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, exercitationem, repudiandae. Aperiam debitis deleniti doloremque, esse expedita facilis harum hic ipsa iure laboriosam minus nemo neque sequi voluptate voluptatum. Quas.'
    },
    {
      picture: './assets/img/client.jpg',
      name: 'Team Member Name',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, exercitationem, repudiandae. Aperiam debitis deleniti doloremque, esse expedita facilis harum hic ipsa iure laboriosam minus nemo neque sequi voluptate voluptatum. Quas.'
    },
    {
      picture: './assets/img/client.jpg',
      name: 'Team Member Name',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, exercitationem, repudiandae. Aperiam debitis deleniti doloremque, esse expedita facilis harum hic ipsa iure laboriosam minus nemo neque sequi voluptate voluptatum. Quas.'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
