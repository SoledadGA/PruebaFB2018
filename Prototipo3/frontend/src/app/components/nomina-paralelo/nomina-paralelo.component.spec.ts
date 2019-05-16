import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NominaParaleloComponent } from './nomina-paralelo.component';

describe('NominaParaleloComponent', () => {
  let component: NominaParaleloComponent;
  let fixture: ComponentFixture<NominaParaleloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NominaParaleloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NominaParaleloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
