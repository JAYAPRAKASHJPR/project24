import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierComponent } from './supplier.component';
import {SupplierTaxComponent} from './supplier-tax/supplier-tax.component'

const routes: Routes = [
  { 
    path: '', 
    component: SupplierComponent
 },
 {
  path : 'supplier-tax',
  component: SupplierTaxComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
