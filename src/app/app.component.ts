import { Component } from '@angular/core'
import { CART } from './cart'
import { getVAT } from './cart-utils'
import { CartItem } from './components/cart-item/cart-item.entity'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items = CART

  vat = getVAT('IT')
  title: string = 'angular-cart'

  changeQuantity(item: CartItem, newQuantity: number) {
    item.quantity = newQuantity
  }
}
