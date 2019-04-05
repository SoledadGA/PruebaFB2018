import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaCincoComponent } from './area-cinco.component';

describe('AreaCincoComponent', () => {
  let component: AreaCincoComponent;
  let fixture: ComponentFixture<AreaCincoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaCincoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaCincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
