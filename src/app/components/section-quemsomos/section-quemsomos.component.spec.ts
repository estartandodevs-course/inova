import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionQuemsomosComponent } from './section-quemsomos.component';

describe('SectionQuemsomosComponent', () => {
  let component: SectionQuemsomosComponent;
  let fixture: ComponentFixture<SectionQuemsomosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionQuemsomosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionQuemsomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
