import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasFreeComponent } from './estadisticas-free.component';

describe('EstadisticasFreeComponent', () => {
  let component: EstadisticasFreeComponent;
  let fixture: ComponentFixture<EstadisticasFreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticasFreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticasFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
