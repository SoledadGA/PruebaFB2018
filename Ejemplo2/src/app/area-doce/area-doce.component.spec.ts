import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDoceComponent } from './area-doce.component';

describe('AreaDoceComponent', () => {
  let component: AreaDoceComponent;
  let fixture: ComponentFixture<AreaDoceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaDoceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaDoceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
