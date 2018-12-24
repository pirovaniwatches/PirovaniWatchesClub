import { NgModule } from '@angular/core';

import { MarketRoutingModule } from './market-routing.module';
import { MarketComponent } from './market.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    MarketRoutingModule
  ],
  declarations: [MarketComponent]
})
export class MarketModule { }
