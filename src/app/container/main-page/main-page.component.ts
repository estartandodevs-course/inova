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
    // document.getElementById("go").style.width = "50%";
    document.getElementById("go").style.height = "0";

}  

}
