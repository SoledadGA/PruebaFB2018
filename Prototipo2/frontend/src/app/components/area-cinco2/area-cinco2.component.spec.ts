import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaCinco2Component } from './area-cinco2.component';

describe('AreaCinco2Component', () => {
  let component: AreaCinco2Component;
  let fixture: ComponentFixture<AreaCinco2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaCinco2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaCinco2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
