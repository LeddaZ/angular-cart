import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Product } from '../../entities/product.entity'
import { CartSourceService } from '../../services/cart-source.service'
import {
  getDiscountedPrice,
  getVAT,
  getVatAmount
} from '../../utils/cart-utils'

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {
  @Input() product!: Product

  @Output() addToCart = new EventEmitter<[string, number]>()

  qty: number = 0
  invalid: boolean = false

  constructor(protected cartSourceSrv: CartSourceService) {}

  addItem(id: string, quantity: number) {
    this.addToCart.emit([id, quantity])
  }

  checkQuantity() {
    if (!this.qty) {
      this.invalid = true
    } else {
      this.invalid = false
    }
  }

  getFinalPrice(price: number, discount: number) {
    return (
      getDiscountedPrice(price, discount) + getVatAmount(price, getVAT('IT'))
    )
  }
}
