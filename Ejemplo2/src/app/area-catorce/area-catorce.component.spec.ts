import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaCatorceComponent } from './area-catorce.component';

describe('AreaCatorceComponent', () => {
  let component: AreaCatorceComponent;
  let fixture: ComponentFixture<AreaCatorceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaCatorceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaCatorceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
