import { Component, Input } from '@angular/core'
import { Product } from '../../entities/product.entity'

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {
  @Input() product!: Product
}
