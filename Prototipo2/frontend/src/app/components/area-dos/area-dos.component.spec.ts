import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDosComponent } from './area-dos.component';

describe('AreaDosComponent', () => {
  let component: AreaDosComponent;
  let fixture: ComponentFixture<AreaDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
