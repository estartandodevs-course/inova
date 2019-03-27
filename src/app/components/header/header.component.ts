import { Component, OnInit } from '@angular/core';
import { ModalComponent} from '../modal/modal.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private modalComponent: ModalComponent) {
  }

  ngOnInit() {
  }
  public specialities = [
    {
      name: "jonatas" ,
      img: "assets/img/dentist.png" ,
      description: "hjkllkjhgfd" ,
    },
    {
      name: "jonat" ,
      img: "assets/img/dentist.png" ,
      description: "hjkllkjhgfd" ,
    },
    {
      name: "natas" ,
      img: "assets/img/dentist.png" ,
      description: "hjkllkjhgfd" ,
    }

    
  ]
  
  openModal(item) {
    this.modalComponent.openModal(item);
  }
}
