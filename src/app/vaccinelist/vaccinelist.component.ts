import { AuthService } from './../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-vaccinelist',
  templateUrl: './vaccinelist.component.html',
  styleUrls: ['./vaccinelist.component.scss']
})
export class VaccinelistComponent implements OnInit {
 
 a;
 i;
 age="";
  constructor(private router:Router,private as:AuthService,public route:ActivatedRoute,public member:MemberService) { }

 

  ngOnInit(): void {

    this.route.params.subscribe(res=>{
      console.log(res['id'])
      this.a=res['id']
    })
    this.member.getvaccinecenter(this.a)
  }
  onClick(indexOfelement){

    for( this.i=0;this.i<=indexOfelement;this.i++){
      console.log(this.member.vaccinationcenters[this.i].id)
        let url='/vaccinedisplay/'+this.member.vaccinationcenters[this.i].id;
        this.router.navigateByUrl(url);
    }
      }
      
    search(){
        if(this.age=="For All Ages" || this.age==""){
          this.member.getvaccinecenter(this.a)
        }
        else{
    this.member.getvaccinecenterwithage(this.a,this.age)
      }
    }

  logout(){
    this.as.signout();
   }
}
