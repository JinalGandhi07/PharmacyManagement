import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MemberService } from '../services/member.service';
import {Location} from '@angular/common';
import swal from 'SweetAlert';
@Component({
  selector: 'app-distriform',
  templateUrl: './distriform.component.html',
  styleUrls: ['./distriform.component.scss']
})
export class DistriformComponent implements OnInit {
Medicines=[];
i=50;
  constructor(private member:MemberService,public loc:Location) { }

  ngOnInit(): void {
  }

  checkCheckBoxValue(event){
    if(event.target.checked){

    console.log(event.target.value);
    this.Medicines.push(event.target.value)
    console.log(this.Medicines)
    }
  }
 
  // adddistributor(formData:NgForm){
    
  //   console.log(formData)
  //    this.member.addDistributor(formData.value,this.Medicines)
  //    formData.resetForm()
    
  //    swal({
  //     title: "Distributor Registered Successfully",
  //     // text: "Hospital registered successfully",
  //     icon: "success",
  //     timer:6000
  //   });
  //  setTimeout(
  //    function(){
  //      location.reload();
  //    },4000
  //  )
  //   }
  adddistributor(formData:NgForm){
    
      console.log(formData)
       this.member.addDistributor(formData.value,this.Medicines)
      formData.resetForm()
      swal({
         title: "Distributor Registered Successfully",
      //  text: "Hospital registered successfully",
          icon: "success",
       });
      setTimeout(
          function(){
             location.reload();
           },4000
         )
  }
  
}
