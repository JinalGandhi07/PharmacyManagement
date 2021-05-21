import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }
  distributors(){
this.route.navigateByUrl('distributors');
  }
  hospitals(){
    this.route.navigateByUrl('hospitals');
      }
}
