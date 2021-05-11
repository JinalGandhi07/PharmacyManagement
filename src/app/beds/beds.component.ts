import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beds',
  templateUrl: './beds.component.html',
  styleUrls: ['./beds.component.scss']
})
export class BedsComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
  }
  onClick(){
    this.router.navigateByUrl('/display');
   }
   
   logout(){
    this.authService.signout();
   }

}
