import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form:FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.form = this.fb.group({
      username: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      confirm: ['',Validators.required]
    });
  }

  ngOnInit() {
  }

  isPasswordMatch() {
    const val = this.form.value;
    return val && val.password && val.password == val.confirm;
  }

  signUp() {
    const val = this.form.value;
    console.log(val)
    this.authService.signup(val.username, val.password)
      .subscribe( success => {
          alert('User created successfully !');
          this.router.navigateByUrl('/home');
      },error => {
        alert(error.message)
      })
  }
}
