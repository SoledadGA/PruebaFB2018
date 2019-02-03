import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioParaleloComponent } from './cambio-paralelo.component';

describe('CambioParaleloComponent', () => {
  let component: CambioParaleloComponent;
  let fixture: ComponentFixture<CambioParaleloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambioParaleloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambioParaleloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
