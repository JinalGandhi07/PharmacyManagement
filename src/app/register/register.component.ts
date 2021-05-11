import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { validateEventsArray } from '@angular/fire/firestore';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  Name="";
  Email="";
  Password="";
  ConfirmPassword="";
  Phone="";
  msg='';
  errorMessage='';
  error: {name:string,message:string}={name: '',message: ''};
  

  constructor(private router:Router,private authService:AuthService) { }
  login(){
    this.router.navigateByUrl('/login');
  }
  register(){
    this.router.navigateByUrl('/register');
}
  

ngOnInit(): void {
}


  submit(){
    if(this.validateForm(this.Email,this.Password)){
     
    this.authService.registerWithEmail(this.Email,this.Password)
    .then(() =>
    {
      
     this.router.navigateByUrl('/home');
    }).catch(_error =>{
    this.error=_error
    this.router.navigateByUrl('/register')
  })
  }
  }

  validateForm(Email,Password){
    if(Email.length ===0){
       this.errorMessage="please enter email id";
      //console.log("please enter email id");
      return false;
    }
    if(Password.length ===0){
      this.errorMessage="please enter password";
      //console.log("please enter password");
      return false;
    }
  
  if(Password.length <6){
      //this.errorMessage="please enter password";
      console.log("length of password be atleast 6 characters");
      return false;
    }
    this.errorMessage='';
    return true;
  }
  
}
