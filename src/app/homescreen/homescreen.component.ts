import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss']
})
export class HomescreenComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }
  loginuser(){
    this.route.navigateByUrl('login');

  }

  distributor(){
    this.route.navigateByUrl('choice');
  }
}
