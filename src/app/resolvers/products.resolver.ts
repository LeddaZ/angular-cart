import { Injectable } from '@angular/core'
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router'
import { Observable } from 'rxjs'
import { ProductService } from '../services/product.service'
import { Product } from '../entities/product.entity'

@Injectable({
  providedIn: 'root'
})
export class ProductsResolver implements Resolve<Product[]> {
  constructor(protected productSrv: ProductService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<Product[]> {
    const filters = route.queryParams
    return this.productSrv.list(filters)
  }
}
