import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.modalService.content.subscribe(res=>this.contentModal = res)
  }

  public contentModal = {}

  public openModal(content){
    this.modalService.content.next(content)
    let modal = document.getElementById('myModal');
    if(modal.style.display == "none" || modal.style.display == ""){
      modal.style.display = "block";
    }else{
      modal.style.display = "none";
    };
  }

  public closeModal(){
    let modal = document.getElementById('myModal');
    if(modal.style.display == "block"){
      modal.style.display = "none";
    }
    
  }  
}
