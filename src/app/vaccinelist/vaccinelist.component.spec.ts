import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinelistComponent } from './vaccinelist.component';

describe('VaccinelistComponent', () => {
  let component: VaccinelistComponent;
  let fixture: ComponentFixture<VaccinelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccinelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
