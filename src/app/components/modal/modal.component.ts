import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() contentModal

  public openModal(){
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
