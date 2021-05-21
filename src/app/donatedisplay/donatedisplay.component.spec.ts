import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatedisplayComponent } from './donatedisplay.component';

describe('DonatedisplayComponent', () => {
  let component: DonatedisplayComponent;
  let fixture: ComponentFixture<DonatedisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonatedisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
