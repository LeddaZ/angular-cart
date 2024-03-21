import { ResolveFn } from '@angular/router'
import { ProductFilters } from '../services/product.service'

export const productFiltersResolver: ResolveFn<ProductFilters> = (
  route,
  _state
) => {
  return route.queryParams
}
