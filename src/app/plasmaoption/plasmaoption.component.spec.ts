import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasmaoptionComponent } from './plasmaoption.component';

describe('PlasmaoptionComponent', () => {
  let component: PlasmaoptionComponent;
  let fixture: ComponentFixture<PlasmaoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlasmaoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasmaoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
