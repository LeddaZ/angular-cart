import { Component, Input } from '@angular/core';
import { CartItem } from '../cart-item/cart-item.entity';
import { parseItem } from '../../cart-utils';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent {
  @Input()
  items: CartItem[] = []

  @Input()
  vat: number = 0

  getNetTotal() {
    const calculatedItems = this.items.map(item => parseItem(item, this.vat))
    return calculatedItems.reduce((total, item) => {
      return total + item.discountedPrice
    }, 0)
  }

  // getVatTotal() {
  //   const calculatedItems = this.calculateItems()
  // }
}
