import { Component, OnDestroy, OnInit } from '@angular/core'
import { CartSourceService } from './services/cart-source.service'
import { VatService } from './services/vat.service'
import { debounceTime, Subject, takeUntil } from 'rxjs'
import { CartItem } from './entities/cart-item.entity'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-cart'
  items$ = this.cartSrv.items$
  vat$ = this.vatSrv.vat$

  private updateQuantity$ = new Subject<{ id: string; quantity: number }>()
  private destroyed$ = new Subject<void>()

  constructor(
    protected cartSrv: CartSourceService,
    protected vatSrv: VatService
  ) {}

  ngOnInit(): void {
    this.vatSrv.setCountry('IT')

    this.updateQuantity$
      .pipe(takeUntil(this.destroyed$), debounceTime(150))
      .subscribe(({ id, quantity }) => {
        this.cartSrv.setQuantity(id, quantity)
      })
  }

  ngOnDestroy(): void {
    this.destroyed$.next()
    this.destroyed$.complete()
  }

  trackById(_: number, item: CartItem) {
    return item.id
  }

  changeQuantity(item: CartItem, newQuantity: number) {
    this.updateQuantity$.next({ id: item.id, quantity: newQuantity })
  }
}
