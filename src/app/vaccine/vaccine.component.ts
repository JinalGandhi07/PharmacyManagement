import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, Directive, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.scss']
})


export class VaccineComponent implements OnInit {

  constructor(private router:Router,private as:AuthService) { }
vlist(a){
  // console.log(a);
  
  this.router.navigate(['/vaccinelist/',a])
  // this.router.navigateByUrl('/vaccinelist');
}

  ngOnInit(): void {
  }
  logout(){
    this.as.signout();
   }
}
