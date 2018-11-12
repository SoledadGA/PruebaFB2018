import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaSeisComponent } from './area-seis.component';

describe('AreaSeisComponent', () => {
  let component: AreaSeisComponent;
  let fixture: ComponentFixture<AreaSeisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaSeisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaSeisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
