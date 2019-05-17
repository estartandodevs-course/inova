import { Component, OnInit } from '@angular/core';
import { EasingLogic } from 'ngx-page-scroll-core';
import { LANG } from '../../theme/lang-pt';
import { EasingLogic } from 'ngx-page-scroll-core';
const sqrt = Math.sqrt,
pow = Math.pow,
sin = Math.sin,
cos = Math.cos,
PI = Math.PI,
c1 = 1.70158,
c2 = c1 * 1.525,
c3 = c1 + 1,
c4 = ( 2 * PI ) / 3,
c5 = ( 2 * PI ) / 4.5;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  public easeOutElastic: EasingLogic = (t: number, b: number, c: number, d: number): number => {
    t /= d/2;
    if (t < 1) return c/2*t*t*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t*t*t + 2) + b;
  }
  public lang = LANG;

  public easeOutElastic: EasingLogic = (t: number, b: number, c: number, d: number): number => {
    t /= d/2;
    if (t < 1) return c/2*t*t*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t*t*t + 2) + b;
  }

  constructor() { }

  ngOnInit() {
  }

}
