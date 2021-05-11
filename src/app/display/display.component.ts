import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor(private as:AuthService,private loc:Location) { }

  ngOnInit(): void {
  }
  logout(){
    this.as.signout();
   }
   back(){
     this.loc.back();
   }
}
