import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaOnceComponent } from './area-once.component';

describe('AreaOnceComponent', () => {
  let component: AreaOnceComponent;
  let fixture: ComponentFixture<AreaOnceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaOnceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaOnceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
