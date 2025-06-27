import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotScreen } from './forgot-screen';

describe('ForgotScreen', () => {
  let component: ForgotScreen;
  let fixture: ComponentFixture<ForgotScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotScreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
