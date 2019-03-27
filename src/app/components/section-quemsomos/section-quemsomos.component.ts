import { Component, OnInit } from '@angular/core';

import { LANG } from '../../theme/lang-pt';

@Component({
  selector: 'app-section-quemsomos',
  templateUrl: './section-quemsomos.component.html',
  styleUrls: ['./section-quemsomos.component.scss']
})
export class SectionQuemsomosComponent implements OnInit {

  public lang = LANG;

  constructor() { }

  ngOnInit() {
  }

}
