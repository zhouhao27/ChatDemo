import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form:FormGroup;

  constructor(private fb : FormBuilder,
    private router : Router, private authService: AuthService) {
    this.form = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  ngOnInit() {
  }

  login() {
    const formValue = this.form.value;

    this.authService.login(formValue.email, formValue.password)
      .subscribe(success => {
        if (success) {
          this.router.navigateByUrl('/home');
        }
      }, error => {
        alert(error);
      })
  }
}
