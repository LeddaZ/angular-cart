import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CartItemComponent } from './components/cart-item/cart-item.component'
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component'
import localeIt from '@angular/common/locales/it'
import { CurrencyPipe, registerLocaleData } from '@angular/common'
import { DiscountAmountPipe } from './pipes/discount-amount.pipe'
import { CartSourceService } from './services/cart-source.service'
import { AppHeaderComponent } from './components/header/header.component'
import { HttpClientModule } from '@angular/common/http'
import { CheckoutComponent } from './pages/checkout/checkout.component'
import { ProductsComponent } from './pages/products/products.component'
import { ProductFiltersComponent } from './components/product-filters/product-filters.component'
import { FooterComponent } from './components/footer/footer.component'
import { ItemCardComponent } from './components/item-card/item-card.component'
import { SideCartComponent } from './components/side-cart/side-cart.component'
registerLocaleData(localeIt)

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    CartItemComponent,
    CartSummaryComponent,
    DiscountAmountPipe,
    CheckoutComponent,
    ProductsComponent,
    ProductFiltersComponent,
    FooterComponent,
    ItemCardComponent,
    SideCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
    { provide: LOCALE_ID, useValue: 'it' },
    CurrencyPipe,
    CartSourceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
