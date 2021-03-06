import {Injectable} from "@angular/core";
import {ShoppingCartService} from "../restaurant-detail/shopping-cart/shopping-cart-service";
import {CartItem} from "../restaurant-detail/shopping-cart/cart-item.model";
import {Http, Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import {Order, OrderItem} from './order.model'
import {MEAT_API} from '../app.api'

@Injectable()
export class OrderService{
  constructor(private cartService: ShoppingCartService, private http: Http){}

   itemsValue(): number{
      return this.cartService.total()
   }

    cartItems(): CartItem[]{
      return this.cartService.items
    }

    increaseQTD(item: CartItem){
      this.cartService.increaseQTD(item)
    }

    decreaseQTD(item: CartItem){
      this.cartService.decreaseQTD(item)
    }

     remove(item: CartItem){
       this.cartService.removeItem(item)
     }

     clear(){
        this.cartService.clear()
     }

     checkOrder(order: Order): Observable<string>{
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        return this.http.post(`${MEAT_API}/orders`, JSON.stringify(order), new RequestOptions({headers: headers})).map(response => response.json())
          .map(order => order.id)
     }

}
