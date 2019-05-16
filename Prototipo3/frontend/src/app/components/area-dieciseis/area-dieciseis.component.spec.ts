import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDieciseisComponent } from './area-dieciseis.component';

describe('AreaDieciseisComponent', () => {
  let component: AreaDieciseisComponent;
  let fixture: ComponentFixture<AreaDieciseisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaDieciseisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaDieciseisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
