import { CartItem } from '../entities/cart-item.entity'

export function getVAT(country: string) {
  return country === 'IT' ? 0.22 : 0
}

export function getDiscountAmount(price: number, discount: number) {
  const percentageDiscount = discount / 100
  return price * percentageDiscount
}

export function getDiscountedPrice(price: number, discount: number) {
  return price - getDiscountAmount(price, discount)
}

export function getVatAmount(price: number, vat: number) {
  return price * vat
}

export function getPrice(price: number, vat: number) {
  return price + getVatAmount(price, vat)
}

export function getTransportFee(weight: number) {
  switch (true) {
    case weight > 2000:
      return 7
    case weight > 5000:
      return 15
    case weight > 10000:
      return 25
    default:
      return 0
  }
}

export function parseItem(item: CartItem, vat: number) {
  let discountAmount =
    getDiscountAmount(item.product.netPrice, item.product.discount) *
    item.quantity
  let discountedPrice =
    getDiscountedPrice(item.product.netPrice, item.product.discount) *
    item.quantity

  let vatAmount = getVatAmount(discountedPrice, vat)
  let price = getPrice(discountedPrice, vat)

  let weight = item.product.weight * item.quantity
  return {
    name: item.product.name,
    quantity: item.quantity,
    weight: weight,
    discountAmount,
    discountedPrice,
    vatAmount,
    price
  }
}
