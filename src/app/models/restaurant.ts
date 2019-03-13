// region Imports
import {Address} from './address';
import {Review} from './review';
// endregion

export class Restaurant {
  // region Attributes
  name: string;
  website: string;
  phone: string;
  rating: number;
  priceRange: number;
  reviews: Review[];
  location: Address;
  // endregion
}

