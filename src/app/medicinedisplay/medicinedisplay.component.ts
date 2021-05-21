import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from '../services/member.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-medicinedisplay',
  templateUrl: './medicinedisplay.component.html',
  styleUrls: ['./medicinedisplay.component.scss']
})
export class MedicinedisplayComponent implements OnInit {
  id;
  details:any={Name:"",City:"", Address:"", Medicines:[],MinStock:NaN, Contact:NaN, ContactTwo:NaN,Email:""}
  
  constructor(public route:ActivatedRoute,public member:MemberService,private loc:Location) { }

  ngOnInit(): void {
    this.route.params.subscribe(res=>{
      console.log(res['id'])
      // console.log(res);
      this.id=res['id']
      this.member.getdistributorbyId(this.id).subscribe(res=>{
        console.log(res)
        this.details=res
      })
    })
  }
  back(){
    this.loc.back();
  }

}
