import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDiezComponent } from './area-diez.component';

describe('AreaDiezComponent', () => {
  let component: AreaDiezComponent;
  let fixture: ComponentFixture<AreaDiezComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaDiezComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaDiezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
