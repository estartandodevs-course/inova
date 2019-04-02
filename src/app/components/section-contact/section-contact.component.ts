import { Component, OnInit } from '@angular/core';
import { ModalComponent} from '../modal/modal.component';
import{ LANG } from '../../theme/lang-pt';
@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.scss']
})
export class SectionContactComponent implements OnInit {

  public itemSelected  = {
    name: "Mensagem Enviada. Obrigado por entrar em contato.",
    img: "",
    description: "",
  }

  constructor(private modalComponent: ModalComponent) { 
  }
  public Lang = LANG
  public name = ""

  ngOnInit() {
  }

  send(nome, tel, email, message){
    this.modalComponent.openModal(this.itemSelected);
  }
}
