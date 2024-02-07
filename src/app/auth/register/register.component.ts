import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  errMsg: string = '';

  userForm = new UntypedFormGroup({
    name: new UntypedFormControl(null, [Validators.required]),
    email: new UntypedFormControl(null, [
      Validators.required,
      Validators.email,
    ]),
    password: new UntypedFormControl(null, [
      Validators.required,
      Validators.pattern(/.{5,}/),
    ]),
  });

  constructor(private AuthService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  // Register Function
  Register(userForm: UntypedFormGroup) {
    if (userForm.valid) {
      this.AuthService.register(userForm.value).subscribe({
        next: (res: any) => {
          if (res.apiStatus === true) {
            this.router.navigate(['login']);
          } else {
            this.errMsg = res?.message;
          }
        },
        error: (error) => {
          this.errMsg = error?.message;
        },
      });
    } else {
      this.errMsg = "Form is invalid";
    }
  }
}
