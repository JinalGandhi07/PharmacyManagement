import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donorlist',
  templateUrl: './donorlist.component.html',
  styleUrls: ['./donorlist.component.scss']
})
export class DonorlistComponent implements OnInit {

  constructor(private router:Router,private as:AuthService) { }
onClick(){
  this.router.navigateByUrl('/display');
}
clicke(){
  this.router.navigateByUrl('/ab');
}
  ngOnInit(): void {
  }

  logout(){
    this.as.signout();
   }
}
