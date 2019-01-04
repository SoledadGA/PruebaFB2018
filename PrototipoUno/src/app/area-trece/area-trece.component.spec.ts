import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaTreceComponent } from './area-trece.component';

describe('AreaTreceComponent', () => {
  let component: AreaTreceComponent;
  let fixture: ComponentFixture<AreaTreceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaTreceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaTreceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
