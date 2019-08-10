import {Component, Input, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'component-logo-dark',
  templateUrl: './logo-dark.component.html',
  styleUrls: ['./logo-dark.component.scss']
})
export class LogoDarkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() invert: boolean = false;

}
