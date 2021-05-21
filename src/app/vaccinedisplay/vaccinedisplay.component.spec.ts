import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinedisplayComponent } from './vaccinedisplay.component';

describe('VaccinedisplayComponent', () => {
  let component: VaccinedisplayComponent;
  let fixture: ComponentFixture<VaccinedisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccinedisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
