import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoCityComponent } from './geo-city.component';

describe('GeoCityComponent', () => {
  let component: GeoCityComponent;
  let fixture: ComponentFixture<GeoCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
