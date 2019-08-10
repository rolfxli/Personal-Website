import {Component, Input, OnInit} from '@angular/core';
import {DisplayProject} from '../portfolio.interface';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'portfolio-project-display',
  templateUrl: './project-display.component.html',
  styleUrls: ['./project-display.component.scss']
})
export class ProjectDisplayComponent implements OnInit {
  @Input() project: DisplayProject;
  @Input() number: number;
   @Input() reverse: boolean = false;
  image: any;

  constructor(private sanitization: DomSanitizer) {
    this.project = {
      title: 'test',
      desc: 'test',
      image: 'http://picsum.photos/1000',
      link: 'link'
    };
  }

  get positionNumber() {
    return String(this.number).padStart(2, '0');
  }

  ngOnInit() {
    this.image = this.sanitization.bypassSecurityTrustStyle('url(${this.project.image})');
  }
}
