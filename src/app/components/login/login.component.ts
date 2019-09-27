import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'frs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isUser: boolean = true;

  constructor(private fb: FormBuilder, private router: Router) { }

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
      this.router.navigate(['/index']);
    } else {
      alert('查询不到该账号，请先注册');
    }
  }

  submitLoginForm() {
    console.log('submitLoginForm');
    console.log(this.loginForm.value);

    // 提交表单的时候，向后端发送请求，后端会把该用户相关信息返回到前端，前端存储到 Session Storage
    // 以后前端再次发起请求的时候都需要带上【在header中】这个 key ???  后端会对header中的信息进行校验【拦截】
    // how to handle this ？？？
    // eg:
    sessionStorage.setItem('user', 'shaw');
  }

}
