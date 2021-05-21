import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-medicinecard',
  templateUrl: './medicinecard.component.html',
  styleUrls: ['./medicinecard.component.scss']
})
export class MedicinecardComponent implements OnInit {

  constructor(private router:Router,private as:AuthService,public member:MemberService) { 

   
  }
  cardm(a){
    // console.log(a);
    //this.router.navigateByUrl('/medicine');
    this.router.navigate(['/medicine/',a])
  }

  ngOnInit(): void {
  }
  logout(){
    this.as.signout();
   }
}
