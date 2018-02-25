import {Injectable} from "@angular/core";
import {ShoppingCartService} from "../restaurant-detail/shopping-cart/shopping-cart-service";
import {CartItem} from "../restaurant-detail/shopping-cart/cart-item.model";

@Injectable()
export class OrderService{
  constructor(private cartService: ShoppingCartService){}

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

}