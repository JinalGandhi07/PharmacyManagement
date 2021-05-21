import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeeddisplayComponent } from './needdisplay.component';

describe('NeeddisplayComponent', () => {
  let component: NeeddisplayComponent;
  let fixture: ComponentFixture<NeeddisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeeddisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeeddisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
