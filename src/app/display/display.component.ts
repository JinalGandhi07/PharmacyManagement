import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
id;
// details=[];
details:any={Name:"", Address:"", Contact:NaN, ContactTwo:NaN, Email:"",NumberOfEstimatedBedsCovid:NaN}
  constructor(private as:AuthService,private loc:Location,public route:ActivatedRoute,public member:MemberService) { }

  ngOnInit(): void {
    this.route.params.subscribe(res=>{
      console.log(res['id'])
      // console.log(res);
      this.id=res['id']
      this.member.getamountbyId(this.id).subscribe(res=>{
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
