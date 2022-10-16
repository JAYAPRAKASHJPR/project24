import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierComponent } from './supplier.component';
import { SupplierTaxComponent } from './supplier-tax/supplier-tax.component';


@NgModule({
  declarations: [
    SupplierComponent,
    SupplierTaxComponent
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule
  ]
})
export class SupplierModule { }
