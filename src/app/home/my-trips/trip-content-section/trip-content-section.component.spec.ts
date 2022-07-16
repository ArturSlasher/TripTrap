import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripContentSectionComponent } from './trip-content-section.component';

describe('TripContentSectionComponent', () => {
  let component: TripContentSectionComponent;
  let fixture: ComponentFixture<TripContentSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripContentSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripContentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
