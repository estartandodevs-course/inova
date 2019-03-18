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
    var i = document.getElementById("main");

    if(menu == "0px" || menu == ""){
    document.getElementById("go").style.height = "150px";
    i.classList.add("tofade");
    i.classList.remove("tofadeoff");      

    }else{
      document.getElementById("go").style.height = "0px";
      i.classList.remove("tofade");
      i.classList.add("tofadeoff");      
    }
  }
  
}
