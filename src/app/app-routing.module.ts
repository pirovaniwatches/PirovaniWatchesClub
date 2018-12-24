import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '@shared/components';

const routes: Routes = [
  {
    path: '',
    loadChildren: '../app/modules/home/home.module#HomeModule',
    pathMatch: 'full'
  },
  {
    path: 'market',
    loadChildren: '../app/modules/market/market.module#MarketModule'
  },
  {
    path: 'watches',
    loadChildren: '../app/modules/watches/watches.module#WatchesModule'
  },
  {
    path: 'pool',
    loadChildren: '../app/modules/pool/pool.module#PoolModule'
  },
  {
    path: 'customize',
    loadChildren: '../app/modules/customize/customize.module#CustomizeModule'
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

