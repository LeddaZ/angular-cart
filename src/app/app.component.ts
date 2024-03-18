import { Component } from '@angular/core'
import { getVAT } from './cart-utils'
import { CartItem } from './components/cart-item/cart-item.entity'
import { CartSourceService } from './services/cart-source.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items$ = this.cartSrv.items$

  vat = getVAT('IT')
  title: string = 'angular-cart'

  constructor(private cartSrv: CartSourceService) {}

  trackById(_: number, item: CartItem) {
    return item.id
  }

  changeQuantity(item: CartItem, newQuantity: number) {
    this.cartSrv.setQuantity(item.id, newQuantity)
  }
}
