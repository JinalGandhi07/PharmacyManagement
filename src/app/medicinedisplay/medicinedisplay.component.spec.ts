import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinedisplayComponent } from './medicinedisplay.component';

describe('MedicinedisplayComponent', () => {
  let component: MedicinedisplayComponent;
  let fixture: ComponentFixture<MedicinedisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicinedisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
