import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { AbstractControl, AbstractControlDirective } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Email="";
  Password="";
  msg='';
  errorMessage='';
  error: {name:string,message:string}={name: '',message: ''};

  constructor(private router:Router,private authService:AuthService) { }


  
  register(){
    // this.isclicked=false;
      this.router.navigateByUrl('/register');
  }

  login(){
    this.router.navigateByUrl('/login');
  }
  // submit(){
  //   this.router.navigateByUrl('/home');
  // }


  submit(){
    // if(this.validateForm(this.Email,this.Password)){
    this.authService.loginWithEmail(this.Email,this.Password)
    .then(() =>
    {
      
     this.router.navigateByUrl('/home');
    }).catch(_error =>{
    this.error=_error
    this.router.navigateByUrl('/login');
  })
  }
  //}
  // validateForm(Email,Password){
  //   if(Email.length ===0){
  //      this.errorMessage="please enter email id";
  //     //console.log("please enter email id");
  //     return false;
  //   }
  //   if(Password.length ===0){
  //     this.errorMessage="please enter password";
  //     //console.log("please enter password");
  //     return false;
  //   }
  
  // if(Password.length <6){
  //     //this.errorMessage="please enter password";
  //     console.log("length of password be atleast 6 characters");
  //     return false;
  //   }
  //   this.errorMessage='';
  //   return true;
  // }
  ngOnInit(): void {
  }

 
}
