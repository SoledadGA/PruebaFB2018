import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaOchoComponent } from './area-ocho.component';

describe('AreaOchoComponent', () => {
  let component: AreaOchoComponent;
  let fixture: ComponentFixture<AreaOchoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaOchoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaOchoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
