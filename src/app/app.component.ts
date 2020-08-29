import { Component, VERSION, OnInit } from '@angular/core';
import { Person } from './model/person';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  person :Person;

  ngOnInit(){
    this.person=new Person();
    this.person.firstName='Venu';
    this.person.lastName='Ravu'
  }

  changeMessage(){
    this.person=new Person();
    this.person.firstName='Mokshitha';
    this.person.lastName='Ravu';
  }
}
