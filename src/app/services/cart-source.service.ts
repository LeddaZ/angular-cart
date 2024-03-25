import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { CartItem } from '../entities/cart-item.entity'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable()
export class CartSourceService {
  protected _items$ = new BehaviorSubject<CartItem[]>([])
  items$ = this._items$.asObservable()

  constructor(protected http: HttpClient) {
    this.fetch()
  }

  add(id: string, quantity: number) {
    return this.http
      .post<CartItem>(`${environment.apiUrl}/api/cart-items/`, {
        productId: id,
        quantity: quantity
      })
      .subscribe((_updated) => {
        this.fetch()
      })
  }

  remove(id: string) {
    return this.http
      .delete<CartItem>(`${environment.apiUrl}/api/cart-items/${id}`)
      .subscribe((_updated) => {
        this.fetch()
      })
  }

  setQuantity(id: string, quantity: number) {
    this.http
      .patch<CartItem>(`${environment.apiUrl}/api/cart-items/${id}`, {
        quantity
      })
      .subscribe((updated) => {
        const index = this._items$.value.findIndex((item) => item.id === id)
        const tmp = structuredClone(this._items$.value)
        tmp[index] = updated
        this._items$.next(tmp)
      })
  }

  fetch() {
    this.http
      .get<CartItem[]>(`${environment.apiUrl}/api/cart-items`)
      .subscribe((items) => {
        this._items$.next(items)
      })
  }

  isEmpty(): boolean {
    return this._items$.value.length === 0
  }
}
