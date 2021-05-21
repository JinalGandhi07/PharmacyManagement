import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from '../services/member.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-vaccinedisplay',
  templateUrl: './vaccinedisplay.component.html',
  styleUrls: ['./vaccinedisplay.component.scss']
})
export class VaccinedisplayComponent implements OnInit {
  id;
  details:any={Name:"",City:"", Address:"", Age:"",Dose:"", Vaccine:""}
  constructor(public route:ActivatedRoute,public member:MemberService,private loc:Location) { }

  ngOnInit(): void {
    this.route.params.subscribe(res=>{
      console.log(res['id'])
      // console.log(res);
      this.id=res['id']
      this.member.getvaccinebyId(this.id).subscribe(res=>{
        console.log(res)
        this.details=res
      })
    })

  }
  back(){
    this.loc.back();
  }
}
