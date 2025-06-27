import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupScreen } from './signup-screen';

describe('SignupScreen', () => {
  let component: SignupScreen;
  let fixture: ComponentFixture<SignupScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupScreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
