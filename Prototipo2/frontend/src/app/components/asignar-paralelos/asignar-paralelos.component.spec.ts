import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarParalelosComponent } from './asignar-paralelos.component';

describe('AsignarParalelosComponent', () => {
  let component: AsignarParalelosComponent;
  let fixture: ComponentFixture<AsignarParalelosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarParalelosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarParalelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
