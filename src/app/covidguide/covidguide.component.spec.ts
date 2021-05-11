import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidguideComponent } from './covidguide.component';

describe('CovidguideComponent', () => {
  let component: CovidguideComponent;
  let fixture: ComponentFixture<CovidguideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidguideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
