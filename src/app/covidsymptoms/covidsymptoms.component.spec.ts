import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidsymptomsComponent } from './covidsymptoms.component';

describe('CovidsymptomsComponent', () => {
  let component: CovidsymptomsComponent;
  let fixture: ComponentFixture<CovidsymptomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidsymptomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidsymptomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
