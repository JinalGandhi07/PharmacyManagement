import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covidguide',
  templateUrl: './covidguide.component.html',
  styleUrls: ['./covidguide.component.scss']
})
export class CovidguideComponent implements OnInit {

  constructor(private as:AuthService) { }

  ngOnInit(): void {
  }
  logout(){
    this.as.signout();
   }
}
