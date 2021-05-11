import { AuthService } from './../services/auth.service';
import { Router,RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService) { }
 medicinecard(){
    this.router.navigateByUrl('/medicinecard');
   }

   vaccine(){
    this.router.navigateByUrl('/vaccine');
   }

   bed(){
    this.router.navigateByUrl('/bed');
   }

   plasma(){
    this.router.navigateByUrl('/plasmaoption');
   }
   logout(){
    this.authService.signout();
   }

  ngOnInit(): void {
  }

}
