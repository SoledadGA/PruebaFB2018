import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaCuatroComponent } from './area-cuatro.component';

describe('AreaCuatroComponent', () => {
  let component: AreaCuatroComponent;
  let fixture: ComponentFixture<AreaCuatroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaCuatroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaCuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
