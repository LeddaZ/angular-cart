import { Component, Input } from '@angular/core'
import { Product } from '../../entities/product.entity'
import { CartSourceService } from '../../services/cart-source.service'

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {
  @Input() product!: Product

  constructor(protected cartSourceSrv: CartSourceService) {}

  addItem() {
    this.cartSourceSrv.add(this.product.id, 20)
  }
}
