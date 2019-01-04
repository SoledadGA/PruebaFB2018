import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDiecisieteComponent } from './area-diecisiete.component';

describe('AreaDiecisieteComponent', () => {
  let component: AreaDiecisieteComponent;
  let fixture: ComponentFixture<AreaDiecisieteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaDiecisieteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaDiecisieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
