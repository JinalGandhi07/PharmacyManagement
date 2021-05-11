import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covidsymptoms',
  templateUrl: './covidsymptoms.component.html',
  styleUrls: ['./covidsymptoms.component.scss']
})
export class CovidsymptomsComponent implements OnInit {

  constructor(private as:AuthService) { }

  ngOnInit(): void {
  }
  logout(){
    this.as.signout();
   }
}
