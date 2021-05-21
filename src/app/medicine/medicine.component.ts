import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
})
export class MedicineComponent implements OnInit {
i:number
a:string
gotdistributors:boolean=false;
p:string=""
  constructor(private router:Router,private as:AuthService,public member:MemberService,public route:ActivatedRoute) { 
 
  }

  
  onClick(indexOfelement){

    for( this.i=0;this.i<=indexOfelement;this.i++){
      console.log(this.member.alldistributors[this.i].id)
        let url='/medicinedisplay/'+this.member.alldistributors[this.i].id;
        this.router.navigateByUrl(url);
    }
      }


  ngOnInit(): void {
    this.route.params.subscribe(res=>{
      console.log(res['a'])
      this.a=res['a']
    })
this.member.getdistributors(this.a)
  }

  logout(){
    this.as.signout();
   }
}
