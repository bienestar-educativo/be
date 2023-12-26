import { Component } from '@angular/core';

import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = new FormGroup({
    usuario : new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

}
