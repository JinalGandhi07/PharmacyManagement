import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plasmalist',
  templateUrl: './plasmalist.component.html',
  styleUrls: ['./plasmalist.component.scss']
})
export class PlasmalistComponent implements OnInit {

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
