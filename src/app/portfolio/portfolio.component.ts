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
      title: 'IR Ranger',
      // tslint:disable-next-line:max-line-length
      desc: 'An night time animal tracking Hackathon project developed at Hack the 6ix 2019; placed top 10 in Best Hack',
      image: '/assets/images/ir_ranger.jpg',
      link: 'https://devpost.com/software/ir-ranger-jwlen0',
      code: 'https://github.com/rolfxli/hackthe6ix2019frontend',
      stack: ['Javascript', 'Node.js', 'MongoDB', 'AngularJS', 'Amazon Rekognition']
    });
    this.projects.push({
      title: 'Discord Music Bot',
      desc: 'A bot built on the discord.js library; supports playing songs and tracking previous plays.',
      // tslint:disable-next-line:max-line-length
      image: '/assets/images/discord-logo.jpg',
      // link: 'https://github.com/rolfxli/MusicBot',
      code: 'https://github.com/rolfxli/MusicBot',
      stack: ['Javascript', 'Node.js', 'PostgreSQL']
    });
    this.projects.push({
      title: 'WatHub',
      // tslint:disable-next-line:max-line-length
      desc: 'A University of Waterloo mobile app with many features including important dates + calendar, ' +
        'feedback, and more. Developed with William Lei, Iris Chen, and more!',
      image: '/assets/images/WatHub-for-Website.jpg',
      link: 'https://play.google.com/store/apps/details?id=io.github.wztlei.wathub',
      code: 'https://github.com/wztlei/wathub',
      stack: ['Java', 'XML', 'Firebase']
    });
    this.projects.push({
      title: 'Biquadris',
      // tslint:disable-next-line:max-line-length
      desc: 'The CS246 Final Group Project in which we built Tetris in C++ with XWindow and other libraries. Achieved 104% including bonus on the game.',
      image: '/assets/images/tetris.jpg',
      stack: ['C++']
    });
    this.projects.push({
      title: 'World in Focus',
      // tslint:disable-next-line:max-line-length
      desc: 'I was the proud Head of Finance and web developer for World in Focus, a student run non-profit ' +
        'for two years.',
      image: '/assets/images/worldinfocusimg.png',
      link: 'http://worldinfocus.ca/',
      stack: ['Javascript', 'Angular 2', 'Express.js', 'Node.js']
    });
    this.projects.push({
      title: 'This Website!',
      // tslint:disable-next-line:max-line-length
      desc: 'This website was developed to display some highlighted projects and my resume. It is responsive, ' +
        'dynamic, and most of all, cool!',
      image: '/assets/images/personalwebhome.png',
      link: 'http://rolfli.ca/',
      code: 'https://github.com/rolfxli/Personal-Website',
      stack: ['Javascript', 'HTML/SASS', 'Angular 2', 'Node.js']
    });
    /*
    this.projects.push({
      title: 'Boat Dodge',
      // tslint:disable-next-line:max-line-length
      desc: 'A fun and quirky game built using scratch that was a blast to build to introduce to my aunt\'s' +
      ' 2nd grade class in China.',
      image: '/assets/images/boatdodge.jpg',
      // link: 'http://rolfli.ca/',
      code: 'https://github.com/rolfxli/BoatDodge',
      stack: ['Scratch']
    });
    */
    this.displayed = this.projects;
  }

  ngOnInit() {
  }

}
