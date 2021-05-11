import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaccinelist',
  templateUrl: './vaccinelist.component.html',
  styleUrls: ['./vaccinelist.component.scss']
})
export class VaccinelistComponent implements OnInit {

  constructor(private router:Router,private as:AuthService) { }

onClick(){
  this.router.navigateByUrl('/display');
}

  ngOnInit(): void {
  }
  logout(){
    this.as.signout();
   }
}
