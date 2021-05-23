import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-plasmalist',
  templateUrl: './plasmalist.component.html',
  styleUrls: ['./plasmalist.component.scss']
})
export class PlasmalistComponent implements OnInit {
i;
city;
  constructor(private router:Router,private as:AuthService,public member:MemberService) { }

  onClick(indexOfelement){

    for( this.i=0;this.i<=indexOfelement;this.i++){
      console.log(this.member.needplasma[this.i].id)
        let url='/needdisplay/'+this.member.needplasma[this.i].id;
        this.router.navigateByUrl(url);
    }
      }

  ngOnInit(): void {
    this.member.getneedplasma();
  }
  logout(){
    this.as.signout();
   }
   search(){
    if(this.city=="All Cities" || this.city==""){
      this.member.getneedplasma();
    }
    else{
 this.member.getneedplasmacities(this.city);}
  }

}
