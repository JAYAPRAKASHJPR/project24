import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CustomerComponent} from './Customer/customer.component'
import {TaxComponent} from './tax/tax.component';
import { FallBackComponent } from './fall-back/fall-back.component';
import { DisplayContentComponent } from './display-content/display-content.component'
import { FormsModule } from '@angular/forms';
import { TaxPayerComponent } from './tax-payer/tax-payer.component';
import { ResolverComponent } from './resolver/resolver.component';
import {DataResolvers} from './auth.guard';
import { DeactivateComponent } from './deactivate/deactivate.component'
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    TaxComponent,
    FallBackComponent,
    DisplayContentComponent,
    TaxPayerComponent,
    ResolverComponent,
    DeactivateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataResolvers],
  bootstrap: [AppComponent]
})
export class AppModule { }
