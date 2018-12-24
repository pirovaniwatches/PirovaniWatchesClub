import { NgModule } from '@angular/core';

import { PoolRoutingModule } from './pool-routing.module';
import { PoolComponent } from './pool.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    PoolRoutingModule
  ],
  declarations: [PoolComponent]
})
export class PoolModule { }
