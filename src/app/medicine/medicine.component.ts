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
city;
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
if(this.a=="Various-Medicines"){
  this.member.getalldistributors()
}
else{
this.member.getdistributors(this.a)
}
  }

  search(){
    if((this.city=="All Cities" || this.city=="") && this.a=="Various-Medicines"){
      this.member.getalldistributors()
    }
    else if(this.city=="All Cities" || this.city==""){
      this.member.getdistributors(this.a)
    }
    else if((this.city!="All Cities" || this.city!="") && this.a=="Various-Medicines"){
this.member.getdistributorsonlybycities(this.city)
    }
    else {
 this.member.getdistributorscities(this.a,this.city);
}
  }

  logout(){
    this.as.signout();
   }
}
