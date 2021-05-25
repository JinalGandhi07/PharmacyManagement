import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MemberService } from '../services/member.service';
import {Location} from '@angular/common';
import swal from 'SweetAlert';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private as:AuthService,private member:MemberService,public loc:Location) { }

  ngOnInit(): void {
  }

  addContact(formData:NgForm){
    
    console.log(formData)
     this.member.addContactForm(formData.value)
    formData.resetForm()
    swal({
      title: "Thank you for sharing your message with us!",
     // text: "Thank you for sharing your message with us!",
        icon: "success",
     });
}

  logout(){
    this.as.signout();
   }

}
