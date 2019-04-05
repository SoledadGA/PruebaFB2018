import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaTresTemporalComponent } from './area-tres-temporal.component';

describe('AreaTresTemporalComponent', () => {
  let component: AreaTresTemporalComponent;
  let fixture: ComponentFixture<AreaTresTemporalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaTresTemporalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaTresTemporalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
