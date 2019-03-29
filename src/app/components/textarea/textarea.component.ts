import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {

  @Input() value= ""
  @Input() placeholder : string
  constructor() { }

  ngOnInit() {
  }

}
