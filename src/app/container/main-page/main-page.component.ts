import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public closeMenu() {
    var i = document.getElementById("main");
    document.getElementById("go").style.height = "0";
    i.classList.remove("tofade");
    i.classList.add("tofadeoff");
  }  

}
