import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaCincoDosComponent } from './area-cinco-dos.component';

describe('AreaCincoDosComponent', () => {
  let component: AreaCincoDosComponent;
  let fixture: ComponentFixture<AreaCincoDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaCincoDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaCincoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
