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
      return ""
    }
    return route
  }

  public openMenu() {
    // document.getElementById("go").style.width = "50%";
    document.getElementById("go").style.height = "auto";
  }

  public closeMenu() {
      // document.getElementById("go").style.width = "50%";
      document.getElementById("go").style.height = "0";

  }   



}
