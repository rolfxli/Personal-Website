import { Component, OnInit } from '@angular/core';

const messages = {
  standard: 'Projects',
  description: 'Check out some of the projects and ideas I\'m showcasing!'
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  message: object = messages;

  constructor() { }

  ngOnInit() {
  }

}
