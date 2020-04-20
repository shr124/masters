import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  isValid = true;
  

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.isValid.
  subscribe(
    (valid: boolean) =>{
      this.isValid = valid;
    }
  )
  }

  onSignIn(form: NgForm){
    const email = form.value.email;
    const pass = form.value.password;
    this.authService.onSignIn(email, pass);
   
  }

}
