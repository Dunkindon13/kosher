import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../../models/restaurant';
import {RestaurantService} from '../../models/services/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
rests: Restaurant[];
  constructor(private restaurantsService: RestaurantService) {
    this.rests = [];
  }

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants(): void {
    this.restaurantsService.getRestaurants()
      .subscribe(restaurants => restaurants.forEach(rest => {
        this.rests.push(rest);
      }));
    // this.restaurantsService.getRestaurants().subscribe(restaurants => this.rests = restaurants);
  }
}
