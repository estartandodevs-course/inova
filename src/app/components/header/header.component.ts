import { Component, OnInit } from '@angular/core';
import { ModalComponent} from '../modal/modal.component';
import {LANG} from '../../theme/lang-pt'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public itemSelected  = {
    name: "",
    img: "",
    description: "",
  }

  constructor( private modalComponent: ModalComponent) {
  }

  public Lang = LANG

  ngOnInit() {
    console.log(LANG)
  }
  public specialities = [
    {
      name: this.Lang.PROSTHESIS.toUpperCase(),
      img: "assets/img/PROSTHESIS.png" ,
      description: "Lorem ipsum id magna dictum praesent senectus, platea mi ultrices venenatis congue potenti per, hendrerit adipiscing nostra commodo nec." ,
    },
    {
      name: this.Lang.SURGERY.toUpperCase() ,
      img: "assets/img/SURGERY.png" ,
      description: "hjkllkjhgfd" ,
    },
    {
      name: this.Lang.ENDODONTICS.toUpperCase() ,
      img: "assets/img/ENDODONTICS.png" ,
      description: "hjkllkjhgfd" ,
    },
    {
      name: this.Lang.AESTHETICS.toUpperCase() ,
      img: "assets/img/AESTHETICS.png" ,
      description: "hjkllkjhgfd" ,
    },
    {
      name: this.Lang.STOMATOLOGY.toUpperCase() ,
      img: "assets/img/STOMATOLOGY.png" ,
      description: "hjkllkjhgfd" ,
    },
    {
      name: this.Lang.IMPLANT.toUpperCase() ,
      img: "assets/img/IMPLANT.png" ,
      description: "hjkllkjhgfd" ,
    },
    {
      name: this.Lang.ORTHODONTICS.toUpperCase() ,
      img: "assets/img/ORTHODONTICS.png" ,
      description: "this.Lang." ,
    },
    {
      name: this.Lang.PERIODONTOLOGY.toUpperCase() ,
      img: "assets/img/PERIODONTOLOGY.png" ,
      description: "hjkllkjhgfd" ,
    },
    {
      name: this.Lang.DENTYING.toUpperCase() ,
      img: "assets/img/DENTYING.png" ,
      description: "hjkllkjhgfd" ,
    },    
  ]
  
  openModal(item) {
    this.itemSelected = item
    this.modalComponent.openModal();
  }
}
