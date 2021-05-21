import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private auth:AuthService,private router:Router) { }
  canActivate(): boolean{
    if(this.auth.isUserSignedIn()){
      return true;
    }
    else{
      this.router.navigateByUrl('/homescreen')
      return false;
    }
  }
}
