import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasmalistComponent } from './plasmalist.component';

describe('PlasmalistComponent', () => {
  let component: PlasmalistComponent;
  let fixture: ComponentFixture<PlasmalistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlasmalistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasmalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
