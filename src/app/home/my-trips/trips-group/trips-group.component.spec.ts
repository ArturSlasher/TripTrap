import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsGroupComponent } from './trips-group.component';

describe('TripsGroupComponent', () => {
  let component: TripsGroupComponent;
  let fixture: ComponentFixture<TripsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripsGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
