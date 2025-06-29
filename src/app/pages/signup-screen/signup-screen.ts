import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators, } from '@angular/forms';

@Component({
  selector: 'app-signup-screen',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './signup-screen.html',
  styleUrl: './signup-screen.scss'
})
export class SignupScreen {

  signupForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      agree: [false, Validators.requiredTrue]
    });
  }

  get f() {
    return this.signupForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.signupForm.markAllAsTouched();

    if (this.signupForm.valid) {
      console.log('Sign Up Successful!', this.signupForm.value);
    }
  }

}
