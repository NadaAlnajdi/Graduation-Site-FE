import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errMsg: string = '';
  ownerList = [23434, 61255, 42634, 54356, 76235];
  LoginForm = new UntypedFormGroup({
    email: new UntypedFormControl(null, [
      Validators.required,
      Validators.email,
    ]),
    password: new UntypedFormControl(null, [
      Validators.required,
      Validators.pattern(/.{5,}/),
    ]),
    ownerId: new UntypedFormControl(null),
  });

  constructor(
    private AuthService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  onSignIn(LoginForm: UntypedFormGroup) {
    if (LoginForm.valid) {
      this.AuthService.login(LoginForm.value).subscribe({
        next: (res: any) => {
          console.log(res);
          if (res.apiStatus === true) {
            if (this.ownerList.includes(res.data.ownerId)) {
              this.AuthService.isOwner.next(true);
            } else {
              this.AuthService.isOwner.next(false);
            }

            this.toastr.success('Welcome!', 'Logged In !');
            this.router.navigate(['home']);
          } else {
            this.errMsg = res?.message;
          }
        },
        error: (error) => {
          this.errMsg = error?.message;
        },
      });
    } else {
      this.errMsg = 'Form is invalid';
    }
  }
}
