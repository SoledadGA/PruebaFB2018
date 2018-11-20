import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaNueveComponent } from './area-nueve.component';

describe('AreaNueveComponent', () => {
  let component: AreaNueveComponent;
  let fixture: ComponentFixture<AreaNueveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaNueveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaNueveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
