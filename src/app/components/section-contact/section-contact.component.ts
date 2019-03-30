import { Component, OnInit } from '@angular/core';
import{ LANG } from '../../theme/lang-pt';
@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.scss']
})
export class SectionContactComponent implements OnInit {

  public Lang = LANG
  public name = ""
  constructor() { }

  ngOnInit() {
  }

  send(nome, tel, email, message){
    console.log("EVENT SECTION   ---   ", nome, tel, email, message)
  }

}
