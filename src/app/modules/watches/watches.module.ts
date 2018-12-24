import { NgModule } from '@angular/core';

import { WatchesRoutingModule } from './watches-routing.module';
import { WatchesComponent } from './watches.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    WatchesRoutingModule
  ],
  declarations: [WatchesComponent]
})
export class WatchesModule { }
