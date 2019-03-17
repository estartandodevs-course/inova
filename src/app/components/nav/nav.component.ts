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
    let menu = document.getElementById("go").style.height;
    if(menu == "0px" || menu == ""){
    document.getElementById("go").style.height = "165px";
    }else{
      document.getElementById("go").style.height = "0px";      
    }
  }
  
}
