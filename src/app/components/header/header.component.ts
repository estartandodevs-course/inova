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
  
  openModal() {
    this.modalComponent.openModal();
  }
}
