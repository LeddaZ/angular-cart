import { Component } from '@angular/core'
import { CartSourceService } from '../../services/cart-source.service'
import { VatService } from '../../services/vat.service'
import { map } from 'rxjs'

@Component({
  selector: 'app-side-cart',
  templateUrl: './side-cart.component.html',
  styleUrl: './side-cart.component.css'
})
export class SideCartComponent {
  items$ = this.cartSrv.items$
  vat$ = this.vatSrv.vat$
  constructor(
    protected cartSrv: CartSourceService,
    protected vatSrv: VatService
  ) {}

  removeItem(id: string) {
    this.cartSrv.remove(id)
  }

  getTotal(): number {
    return this.items$.filter()
  }
}
