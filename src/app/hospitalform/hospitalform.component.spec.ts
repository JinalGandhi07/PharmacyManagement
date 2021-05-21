import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalformComponent } from './hospitalform.component';

describe('HospitalformComponent', () => {
  let component: HospitalformComponent;
  let fixture: ComponentFixture<HospitalformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
