import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthIllustrationComponent } from './auth-illustration.component';

describe('AuthIllustrationsComponent', () => {
  let component: AuthIllustrationComponent;
  let fixture: ComponentFixture<AuthIllustrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthIllustrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthIllustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
