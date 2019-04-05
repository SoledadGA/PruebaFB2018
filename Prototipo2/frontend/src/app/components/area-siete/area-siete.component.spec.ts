import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaSieteComponent } from './area-siete.component';

describe('AreaSieteComponent', () => {
  let component: AreaSieteComponent;
  let fixture: ComponentFixture<AreaSieteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaSieteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaSieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
