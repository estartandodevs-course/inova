import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public openModal(){
    let modal = document.getElementById('myModal');
    console.log(modal.style.display);
    if(modal.style.display == "none" || modal.style.display == ""){
      modal.style.display = "block";
    }else{
      modal.style.display = "none";
    };
  }
  public closeModal(){
    let modal = document.getElementById('myModal');
    console.log(modal.style.display);
    if(modal.style.display == "block"){
      modal.style.display = "none";
    }
    
  }  
}
