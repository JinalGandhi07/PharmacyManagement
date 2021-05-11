import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinecardComponent } from './medicinecard.component';

describe('MedicinecardComponent', () => {
  let component: MedicinecardComponent;
  let fixture: ComponentFixture<MedicinecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicinecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
