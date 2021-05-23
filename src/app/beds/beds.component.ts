import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-beds',
  templateUrl: './beds.component.html',
  styleUrls: ['./beds.component.scss']
})
export class BedsComponent implements OnInit {
 i:number;
 city;
 
  constructor(private router:Router,private authService:AuthService, public member:MemberService) { 
    
  }

  ngOnInit() {
  
    this.member.getbedhospitals();
  }
 search(){
   if(this.city=="All Cities" || this.city==""){
     this.member.getbedhospitals();
   }
   else{
this.member.getbedhospitalscities(this.city);}
 }
  onClick(indexOfelement){

for( this.i=0;this.i<=indexOfelement;this.i++){
  console.log(this.member.result[this.i].id)
    let url='/display/'+this.member.result[this.i].id;
    this.router.navigateByUrl(url);
}
  }

   logout(){
    this.authService.signout();
   }

}
