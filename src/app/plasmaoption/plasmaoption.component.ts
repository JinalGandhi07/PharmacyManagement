import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plasmaoption',
  templateUrl: './plasmaoption.component.html',
  styleUrls: ['./plasmaoption.component.scss']
})
export class PlasmaoptionComponent implements OnInit {

  constructor(private router:Router,private as:AuthService) { }

  donor(){
    this.router.navigateByUrl('/donorlist');
  }
  plasma(){
    this.router.navigateByUrl('/plasmalist');
  }
  ngOnInit(): void {
  }
  logout(){
    this.as.signout();
   }
}
