import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaUnoComponent } from './area-uno.component';

describe('AreaUnoComponent', () => {
  let component: AreaUnoComponent;
  let fixture: ComponentFixture<AreaUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
