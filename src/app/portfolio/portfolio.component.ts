import { Component, OnInit } from '@angular/core';
import { DisplayProject} from '../portfolio.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects: Array<DisplayProject> = [];
  displayed: Array<DisplayProject> = [];

  constructor() {
    this.projects.push({
      title: 'Discord Music Bot',
      desc: 'A bot built on the discord.js library; supports playing songs and tracking previous plays.',
      // tslint:disable-next-line:max-line-length
      image: '/assets/images/discord-logo.jpg',
      // link: 'https://github.com/rolfxli/MusicBot',
      code: 'https://github.com/rolfxli/MusicBot',
      stack: ['Node.js', 'PostgreSQL']
    });
    this.projects.push({
      title: 'WatHub',
      // tslint:disable-next-line:max-line-length
      desc: 'A University of Waterloo mobile application with support for many features including important dates + calendar support, ' +
        'feedback options, and more. Developed with William Lei, Iris Chen, and a great team!',
      image: '',
      link: 'https://play.google.com/store/apps/details?id=io.github.wztlei.wathub',
      code: 'https://github.com/wztlei/wathub',
      stack: ['Android', 'Firebase']
    });
    this.projects.push({
      title: 'World in Focus',
      // tslint:disable-next-line:max-line-length
      desc: 'A website for charity I was .......... fill here',
      image: '/assets/images/worldinfocusimg.png',
      link: 'http://worldinfocus.ca/',
      stack: ['Angular', 'Node.js']
    });
    this.displayed = this.projects;
  }

  // slice to preview?

  ngOnInit() {
  }

}
