import {Injectable} from '@angular/core';
import {Restaurant} from '../restaurant';
import {Observable, of} from 'rxjs';
import {Address} from '../address';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  restaurants: Restaurant[];

// TODO; Replace with API call
  constructor() {
    this.restaurants = [
      new Restaurant({
        name: 'Big Brother\'s Resto and Bar',
        phone: '(514) 123-2019',
        website: 'https://www.exceptionmontreal.com',
        rating: 3,
        avgMealPrice: 20,
        location: new Address({
          streetNumber: 1984,
          streetName: 'George Orwell St.',
          city: 'London',
          country: 'England'
        })
      }),
      new Restaurant({
        name: 'Mr. Monopoly\'s Café',
        phone: '(609) 999-2019',
        website: 'http://cafetav.com/',
        rating: 4,
        avgMealPrice: 15,
        location: new Address({
          streetNumber: 1234,
          streetName: 'Mediterranean Av.',
          apartment: 1,
          city: 'Atlantic City',
          province: 'New Jersey',
          country: 'United States',
          postalCode: '08201'
        })
      }),
      new Restaurant({
        name: 'The Hog\'s Head',
        phone: '(020) 666-2000',
        rating: 5,
        avgMealPrice: 30,
        location: new Address({
          streetNumber: 4,
          streetName: 'Privet Drive',
          city: 'Surrey',
          province: 'N/A',
          country: 'England',
          postalCode: 'N5V 3A6'
        })
      }),
      new Restaurant({
        name: 'Meir\'s Pizza',
        phone: '(514) 345-2019',
        website: 'https://www.pizzapita.com',
        rating: 4,
        avgMealPrice: 10
      }),
      new Restaurant({
        name: 'Yakimono Sushi Bar',
        phone: '(514) 484-1515',
        website: 'https://www.yakimono.ca',
        rating: 4,
        avgMealPrice: 30,
        location: new Address({
          streetNumber: 4210,
          streetName: 'Décarie Blvd.',
          city: 'Montréal',
          province: 'Québec',
          country: 'Canada',
          postalCode: 'H4A 3K3'
        })
      })
    ];
  }

  // region Getters
  getRestaurants(): Observable<Restaurant[]> {
    return of(this.restaurants);
  }

  // endregion
}
