import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'frs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isUser: boolean = true;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  showLogin() {
    this.isUser = true;
  }

  showRegister() {
    this.isUser = !this.isUser;
  }

  loginForm = this.fb.group({
    account: ['', Validators.required],
    password: ['', Validators.required]
  })

  onSubmitLoginForm() {
    console.warn(this.loginForm.value);
    // this.loginService.
    if (this.loginForm.value.account === 'shaw' && this.loginForm.value.password === '123') {
      window.location.href = 'http://localhost:4200/index';
    } else {
      alert('查询不到该账号，请先注册');
    }
  }

  submitLoginForm() {
    console.log('submitLoginForm');
    console.log(this.loginForm.value);

  }

}
