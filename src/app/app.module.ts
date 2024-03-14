import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms'
import { CartItemComponent } from './components/cart-item/cart-item.component'
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component'

@NgModule({
  declarations: [AppComponent, CartItemComponent, CartSummaryComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
