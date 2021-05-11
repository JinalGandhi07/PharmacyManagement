import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
})
export class MedicineComponent implements OnInit {

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
