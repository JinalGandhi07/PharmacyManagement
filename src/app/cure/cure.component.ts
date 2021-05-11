import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cure',
  templateUrl: './cure.component.html',
  styleUrls: ['./cure.component.scss']
})
export class CureComponent implements OnInit {

  constructor(private as:AuthService) { }

  ngOnInit(): void {
  }
  logout(){
    this.as.signout();
   }
}
