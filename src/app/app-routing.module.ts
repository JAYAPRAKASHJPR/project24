import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './Customer/customer.component'
import { DisplayContentComponent } from './display-content/display-content.component';
import { FallBackComponent } from './fall-back/fall-back.component';
import { TaxComponent } from './tax/tax.component';
import { AuthGuard, childGuard, DataResolvers } from './auth.guard'
import { DeactiveGuard } from './deactive.guard'
import { TaxPayerComponent } from './tax-payer/tax-payer.component';
import { ResolverComponent } from './resolver/resolver.component'
import { DeactivateComponent } from './deactivate/deactivate.component';
import { LazyguardGuard } from './lazyguard.guard';

const routes: Routes = [
  {
    path: 'customer',
    component: CustomerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'tax',
    component: TaxComponent
  },
  {
    path: 'sub-route',
    component: TaxComponent,
    children: [
      {
        path: 'tax-payer',
        component: TaxPayerComponent,
        canActivateChild: [childGuard]
      }
    ]
  },
  {
    path: `displayContents`,
    component: DisplayContentComponent
  },
  {
    path: 'resolve',
    component: ResolverComponent,
    resolve: { data: DataResolvers }
  },
  {
    path: 'deactivate',
    component: DeactivateComponent,
    canDeactivate: [DeactiveGuard]
  },
  {
    path: 'displayContent/:id/:name',
    component: DisplayContentComponent
  },
  {
    path: '',
    redirectTo: '/customer',
    pathMatch: 'full'
  },
  {
    path: 'supplier',
    loadChildren: () => import('./supplier/supplier.module').then(m => m.SupplierModule),
    canLoad: [LazyguardGuard]
  },

  {
    path: '**',
    component: FallBackComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
