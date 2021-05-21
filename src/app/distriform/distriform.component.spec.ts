import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistriformComponent } from './distriform.component';

describe('DistriformComponent', () => {
  let component: DistriformComponent;
  let fixture: ComponentFixture<DistriformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistriformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistriformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
