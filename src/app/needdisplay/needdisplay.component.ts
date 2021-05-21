import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MemberService } from '../services/member.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-needdisplay',
  templateUrl: './needdisplay.component.html',
  styleUrls: ['./needdisplay.component.scss']
})
export class NeeddisplayComponent implements OnInit {
  id;
  details:any={Name:"", Address:"", Contact:NaN,ContactTwo:NaN, Email:""}
  constructor(private as:AuthService,private loc:Location,public route:ActivatedRoute,public member:MemberService) { }

  ngOnInit(): void {
    this.route.params.subscribe(res=>{
      console.log(res['id'])
      // console.log(res);
      this.id=res['id']
      this.member.getneedplasmabyId(this.id).subscribe(res=>{
        console.log(res)
        this.details=res
      })
    })

  }
  logout(){
    this.as.signout();
   }
   back(){
     this.loc.back();
   }


}
