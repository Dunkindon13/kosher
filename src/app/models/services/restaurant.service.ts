import {Injectable} from '@angular/core';
import {Restaurant} from '../restaurant';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  restaurants: Restaurant[];

// TODO; Replace with API call
  constructor() {
    this.restaurants = [
      new Restaurant({
        name: 'Meir\'s Resto and Bar',
        phone: '(514) 123-2019',
        website: 'https://www.exceptionmontreal.com',
        rating: 3,
        avgMealPrice: 20
      }),
      new Restaurant({
        name: 'Meir\'s Cafe',
        phone: '(514) 123-2019',
        website: 'https://www.cafetav.com',
        rating: 4,
        avgMealPrice: 15
      }),
      new Restaurant({
        name: 'Meir\'s Steakhouse',
        phone: '(514) 234-2019',
        website: 'https://www.moishes.ca',
        rating: 5,
        avgMealPrice: 30
      }),
      new Restaurant({
        name: 'Meir\'s Pizza',
        phone: '(514) 345-2019',
        website: 'https://www.pizzapita.com',
        rating: 4,
        avgMealPrice: 10
      })
    ];
  }

  // region Getters
  getRestaurants(): Observable<Restaurant[]> {
    return of(this.restaurants);
  }
  // endregion
}
