import { Component, OnDestroy, OnInit } from '@angular/core'
import { ProductFilters, ProductService } from '../../services/product.service'
import { ReplaySubject, Subject } from 'rxjs'
import { debounceTime, map, takeUntil } from 'rxjs/operators'
import { ActivatedRoute, Router } from '@angular/router'
import { isNil, omitBy } from 'lodash'
import { Product } from '../../entities/product.entity'
import { CartSourceService } from '../../services/cart-source.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit, OnDestroy {
  protected updateQueryParams$ = new ReplaySubject<ProductFilters>()
  filters$ = this.activatedRoute.data.pipe(
    map(({ filters }) => filters as ProductFilters)
  )

  products$ = this.activatedRoute.data.pipe(
    map(({ products }) => products as Product[])
  )

  protected destroyed$ = new Subject<void>()

  constructor(
    protected productSrv: ProductService,
    protected cartSrv: CartSourceService,
    protected router: Router,
    protected activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.updateQueryParams$
      .pipe(
        takeUntil(this.destroyed$),
        map((filters) => omitBy(filters, isNil)),
        map((filters) => omitBy(filters, (val) => val === '')),
        debounceTime(150)
      )
      .subscribe((filters) => {
        this.router.navigate([], { queryParams: filters })
      })

    this.activatedRoute.data.subscribe((data) => console.log(data))
  }

  ngOnDestroy(): void {
    this.destroyed$.next()
    this.destroyed$.complete()
  }

  applyFilters(value: ProductFilters) {
    this.updateQueryParams$.next(value)
  }

  addItem(item: [string, number]) {
    this.cartSrv.add(item[0], item[1])
  }
}
