import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { AppService } from "../app.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authForm!: FormGroup ;

  isSubmitted: boolean = false;

  loading: boolean = false;

  returnUrl: string;

  public credentials = {
    username: '',
    password: ''
  };

  constructor(private formBuilder: FormBuilder,
              private appService: AppService,
              private router: Router,
              private route: ActivatedRoute,) { }

  get formControls() { return this.authForm.controls; }

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      rememberme:''
    });

    // reset login status
    this.appService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  signIn() {
    this.isSubmitted = true;
    if (this.authForm.invalid) {
            return;
    }
    this.loading = true;
    this.appService.authenticate(this.credentials, () => {
      this.router.navigateByUrl('/home');
    });{
    }
  }
}
