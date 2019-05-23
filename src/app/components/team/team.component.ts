import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  members = [
    {
      picture: './assets/img/img.jpg',
      name: 'Team Member Name',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, exercitationem, repudiandae. Aperiam debitis deleniti doloremque, esse expedita facilis harum hic ipsa iure laboriosam minus nemo neque sequi voluptate voluptatum. Quas.'
    },
    {
      picture: './assets/img/img.jpg',
      name: 'Team Member Name',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, exercitationem, repudiandae. Aperiam debitis deleniti doloremque, esse expedita facilis harum hic ipsa iure laboriosam minus nemo neque sequi voluptate voluptatum. Quas.'
    },
    {
      picture: './assets/img/img.jpg',
      name: 'Team Member Name',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, exercitationem, repudiandae. Aperiam debitis deleniti doloremque, esse expedita facilis harum hic ipsa iure laboriosam minus nemo neque sequi voluptate voluptatum. Quas.'
    },
    {
      picture: './assets/img/img.jpg',
      name: 'Team Member Name',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, exercitationem, repudiandae. Aperiam debitis deleniti doloremque, esse expedita facilis harum hic ipsa iure laboriosam minus nemo neque sequi voluptate voluptatum. Quas.'
    },
    {
      picture: './assets/img/img.jpg',
      name: 'Team Member Name',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, exercitationem, repudiandae. Aperiam debitis deleniti doloremque, esse expedita facilis harum hic ipsa iure laboriosam minus nemo neque sequi voluptate voluptatum. Quas.'
    },
    {
      picture: './assets/img/img.jpg',
      name: 'Team Member Name',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, exercitationem, repudiandae. Aperiam debitis deleniti doloremque, esse expedita facilis harum hic ipsa iure laboriosam minus nemo neque sequi voluptate voluptatum. Quas.'
    },
    {
      picture: './assets/img/img.jpg',
      name: 'Team Member Name',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, exercitationem, repudiandae. Aperiam debitis deleniti doloremque, esse expedita facilis harum hic ipsa iure laboriosam minus nemo neque sequi voluptate voluptatum. Quas.'
    },
    {
      picture: './assets/img/img.jpg',
      name: 'Team Member Name',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, exercitationem, repudiandae. Aperiam debitis deleniti doloremque, esse expedita facilis harum hic ipsa iure laboriosam minus nemo neque sequi voluptate voluptatum. Quas.'
    },
    {
      picture: './assets/img/img.jpg',
      name: 'Team Member Name',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, exercitationem, repudiandae. Aperiam debitis deleniti doloremque, esse expedita facilis harum hic ipsa iure laboriosam minus nemo neque sequi voluptate voluptatum. Quas.'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
