import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  constructor(private _service: AppService, private formBuilder: FormBuilder, private router: Router,
    private alert: ToastrService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginForm.value)
    const login = this._service.login(this.loginForm.value)
    if (login) {
      this.router.navigate(['core'])
    } else {
      this.alert.error('Incorrect username or password')
    }
  }

}
