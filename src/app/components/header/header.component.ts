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
    // console.log(LANG)
  }
  public specialities = [
    {
      name: this.Lang.PROSTHESIS.toUpperCase(),
      img: "assets/img/PROSTHESIS.png" ,
      description: "essa é a descrição de PRÓTESE : A prótese dentária é a arte dental, que visa restaurar e manter a forma, função, aparência e saúde bucal" , 
    },
    {
      name: this.Lang.SURGERY.toUpperCase() ,
      img: "assets/img/SURGERY.png" ,
      description: "essa é a descrição de CIRURGIA : Cirurgia também chamada (procedimento cirúrgico) é qualquer tipo de procedimento no qual o cirurgião realiza uma intervenção manual ou instrumental no corpo do paciente para diagnosticar,tratar ou curar doenças ou traumatismo, ou para melhorar a funcionalidade ou aparência de parte do corpo. " ,
    },
    {
      name: this.Lang.ENDODONTICS.toUpperCase() ,
      img: "assets/img/ENDODONTICS.png" ,
      description: "essa é a descrição de ENDODONTIA : Endodontia é a especialidade da odontologia responsável pelo estudo da polpa dentária, de todo o sistema de canais radiculares e dos tecidos periapicais, bem como das doenças que os afligem" ,
    },
    {
      name: this.Lang.AESTHETICS.toUpperCase() ,
      img: "assets/img/AESTHETICS.png" ,
      description: "essa é a descrição de ESTÉTICA : Estética é um ramo da filosofia que tem por objetivo o estudo, da natureza, da beleza e dos fundamentos da arte" ,
    },
    {
      name: this.Lang.STOMATOLOGY.toUpperCase() ,
      img: "assets/img/STOMATOLOGY.png" ,
      description: "essa é a descrição de ESTOMATOLOGIA : Estomatologia é o estudo da boca, O cirurgião dentista especialista em estomatologia, é um profissional que previne, diagnostica e trata as enfermidades relacionadas com a boca. O aparelho estomatognático é constituído pelos lábios, dentes, mucosa oral, glândulas salivares, tonsilas palatinas e faringeas e demais estruturas da orofaringe. "
    },
    {
      name: this.Lang.IMPLANT.toUpperCase() ,
      img: "assets/img/IMPLANT.png" ,
      description: "essa é a descrição de IMPLANTODONTIA : Implantodontia é um ramo da Odontologia que se destina ao tratamento do edentulismo com reabilitações protéticas suportadas ou retidas por implantes dentários " ,
    },
    {
      name: this.Lang.ORTHODONTICS.toUpperCase() ,
      img: "assets/img/ORTHODONTICS.png" ,
      description: "essa é a descrição de ORTODONTIA : A Ortodontia é a especialidade da Odontologia relacionada ao estudo, prevenção e tratamento dos problemas de crescimento, desenvolvimento e amadurecimento da face, dos arcos dentários e da oclusão, ou seja, disfunções dento-faciais" ,
    },
    {
      name: this.Lang.PERIODONTOLOGY.toUpperCase() ,
      img: "assets/img/PERIODONTOLOGY.png" ,
      description: "essa é a descrição de PERIODONTIA : Periodontia ou periodontologia é a ciência que estuda e trata as doenças do sistema de implantação e suporte dos dentes. Este aparelho é formado por osso alveolar, ligamento periodontal e cemento." ,
    },
    {
      name: this.Lang.DENTYING.toUpperCase() ,
      img: "assets/img/DENTYING.png" ,
      description: "essa é a descrição de DENTÍSTICA : Dentística ou odontologia estética é o ramo da odontologia que atua na área da cosmética e restauração dental." ,
    },    
  ]
  
  openModal(item) {
    this.itemSelected = item
    this.modalComponent.openModal();
  }
}
