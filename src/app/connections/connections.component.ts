import {Component, Input, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'component-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss']
})
export class ConnectionsComponent implements OnInit {
  @Input() theme: 'light';
  @Input() align: string;

  links: Array<Link>;

  constructor() {
    this.links = [
      {title: 'Github', url: 'https://github.com/rolfxli'},
      {title: 'LinkedIn', url: 'https://linkedin.com/in/rolfli'},
      {title: 'Email', url: 'mailto:rolf.x.li@gmail.com'}
    ];
  }

  ngOnInit() {
  }
}

interface Link {
    title: string;
    url: string;
}

