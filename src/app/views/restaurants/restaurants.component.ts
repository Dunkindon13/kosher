import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../../models/restaurant';
import {RestaurantService} from '../../models/services/restaurant.service';
import {KosherApiService} from '../../models/services/kosher-api.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
rests: Restaurant[];
  constructor(private restaurantsService: KosherApiService) { }

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants(): void {
    this.restaurantsService.getRestaurants().subscribe(restaurants => this.rests = restaurants);
  }
}
