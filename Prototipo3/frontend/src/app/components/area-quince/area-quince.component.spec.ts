import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaQuinceComponent } from './area-quince.component';

describe('AreaQuinceComponent', () => {
  let component: AreaQuinceComponent;
  let fixture: ComponentFixture<AreaQuinceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaQuinceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaQuinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
