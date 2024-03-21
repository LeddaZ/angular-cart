import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Product } from '../../entities/product.entity'
import { CartSourceService } from '../../services/cart-source.service'

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {
  @Input() product!: Product

  @Output() addToCart = new EventEmitter<[string, number]>()

  constructor(protected cartSourceSrv: CartSourceService) {}

  addItem(id: string, quantity: number) {
    this.addToCart.emit([id, quantity])
  }
}
