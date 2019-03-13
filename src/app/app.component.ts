import {Component, OnInit} from '@angular/core';
import {Restaurant} from './models/restaurant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  rests: Restaurant[];

  constructor() {
    this.rests = [];
    let r1 = new Restaurant();
    r1.name = 'TAV Cafe';
    r1.phone = '(514) 112-3581';
    r1.rating = 3;
    r1.priceRange = 3;
    r1.website = 'http://www.cafetav.com';
    this.rests.push(r1);

    r1 = new Restaurant();
    r1.name = 'Pizza Pita';
    r1.phone = '(514) 234-1111';
    r1.rating = 4;
    r1.priceRange = 2;
    r1.website = 'http://www.pizzapita.com';
    this.rests.push(r1);

    r1 = new Restaurant();
    r1.name = 'Exceptions';
    r1.rating = 3;
    r1.priceRange = 5;
    r1.website = 'http://www.exceptionmontreal.com';
    this.rests.push(r1);
  }
}


