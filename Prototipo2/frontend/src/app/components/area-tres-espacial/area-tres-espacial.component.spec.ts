import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaTresEspacialComponent } from './area-tres-espacial.component';

describe('AreaTresEspacialComponent', () => {
  let component: AreaTresEspacialComponent;
  let fixture: ComponentFixture<AreaTresEspacialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaTresEspacialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaTresEspacialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
