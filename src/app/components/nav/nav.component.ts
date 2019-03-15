import { Component, OnInit } from '@angular/core';
import { menu } from '../../theme/lang-pt';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public Lang = menu;

  constructor() { }

  ngOnInit() {
    
  }

  isHome(route){
    if(route.toLowerCase() == "home"){
      return "Estou na home"
    }
    return route
  }



}
