import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-donorlist',
  templateUrl: './donorlist.component.html',
  styleUrls: ['./donorlist.component.scss']
})
export class DonorlistComponent implements OnInit {
i;
  constructor(private router:Router,private as:AuthService, public member:MemberService) { }
  onClick(indexOfelement){

    for( this.i=0;this.i<=indexOfelement;this.i++){
      console.log(this.member.donateplasma[this.i].id)
        let url='/donatedisplay/'+this.member.donateplasma[this.i].id;
        this.router.navigateByUrl(url);
    }
      }
clicke(){
  this.router.navigateByUrl('/ab');
}
  ngOnInit(): void {
    this.member.getdonateplasma();
  }

  logout(){
    this.as.signout();
   }
}
