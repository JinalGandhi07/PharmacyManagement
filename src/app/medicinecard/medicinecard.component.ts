import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicinecard',
  templateUrl: './medicinecard.component.html',
  styleUrls: ['./medicinecard.component.scss']
})
export class MedicinecardComponent implements OnInit {

  constructor(private router:Router,private as:AuthService) { }
  cardm(){
    this.router.navigateByUrl('/medicine');
  }

  ngOnInit(): void {
  }
  logout(){
    this.as.signout();
   }
}
