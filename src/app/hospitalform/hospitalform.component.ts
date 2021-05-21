import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MemberService } from '../services/member.service';
import swal from 'SweetAlert';

@Component({
  selector: 'app-hospitalform',
  templateUrl: './hospitalform.component.html',
  styleUrls: ['./hospitalform.component.scss']
})
export class HospitalformComponent implements OnInit {


  constructor(private member:MemberService) { }

  ngOnInit(): void {
  }
  addhospital(formData:NgForm){
    console.log(formData)
this.member.addHospital(formData.value)
formData.resetForm()
swal({
  title: "Hospital Registered Successfully",
  // text: "Hospital registered successfully",
  icon: "success",
});

  }
}
