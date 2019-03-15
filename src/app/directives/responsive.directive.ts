import {Directive} from '@angular/core';
import {HostListener} from '@angular/core';

@Directive({
  selector: '[appResponsive]'
})
export class ResponsiveDirective {

  scrHeight: any;
  scrWidth: any;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    console.log(this.scrHeight, this.scrWidth);
  }

  constructor() {
    this.getScreenSize();
  }

}
