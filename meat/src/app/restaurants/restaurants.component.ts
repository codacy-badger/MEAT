import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model'
import {RestaurantsServices} from "./restaurants.service";


@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {



  restaurants: Restaurant[]

  constructor(private restaurantsService: RestaurantsServices) { }

  ngOnInit() {

    this.restaurantsService.restaurants().subscribe(restaurants => this.restaurants = restaurants)
  }

}
