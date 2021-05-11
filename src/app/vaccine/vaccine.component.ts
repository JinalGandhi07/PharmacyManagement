import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.scss']
})
export class VaccineComponent implements OnInit {

  constructor(private router:Router,private as:AuthService) { }
vlist(){
  this.router.navigateByUrl('/vaccinelist');
}

  ngOnInit(): void {
  }
  logout(){
    this.as.signout();
   }
}
