import { NgModule } from '@angular/core';

import { CustomizeRoutingModule } from './customize-routing.module';
import { CustomizeComponent } from './customize.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CustomizeRoutingModule
  ],
  declarations: [CustomizeComponent]
})
export class CustomizeModule { }
