import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
   signedin=false;
  registerWithEmail(Email: string, Password: string) {
  return this.afu.createUserWithEmailAndPassword(Email,Password).then((user)=>{
  this.authState=user
  this.signedin=true;
   }).catch(error=>{
     console.log(error)
     throw error
   })
  }
  
  loginWithEmail(Email: string, Password: string) {
    return this.afu.signInWithEmailAndPassword(Email,Password).then((user)=>{
    this.authState=user
    this.signedin=true;
     }).catch(error=>{
       alert(error);
       throw error
     })
    }
    
  authState:any=null;

  constructor(private afu:AngularFireAuth,private router:Router) { 
    this.afu.authState.subscribe((auth =>{
      this.authState=auth;
      if(auth.uid){
        this.signedin=true;
        this.router.navigateByUrl('/home');
      }
      else{
        this.signedin=false;
      }
    }))
  }
  get isUserAnonymousLoggedIn(): boolean {
    return (this.authState !== null) ? this.authState.isAnonymous : false
  }

  get currentUserId(): string {
    return (this.authState !== null) ? this.authState.uid : ''
  }

  get currentUserName(): string {
    return this.authState['email']
  }

  get currentUser(): any {
    return (this.authState !== null) ? this.authState : null;
  }

  get isUserEmailLoggedIn(): boolean {
    if ((this.authState !== null) && (!this.isUserAnonymousLoggedIn)) {
      return true
    } else {
      return false
    }
  }

  signout():void{
    this.signedin=false;
    this.afu.signOut();
   
    this.router.navigateByUrl('/login');
  }

  isUserSignedIn(){
    return this.signedin;
  }
}
