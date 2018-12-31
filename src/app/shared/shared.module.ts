import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as PROVIDERS from './providers';
import * as COMPONENTS from './components';

const COMPONENTS_LIST = [
  COMPONENTS.LoadingComponent, 
  COMPONENTS.PageNotFoundComponent,
  COMPONENTS.UserAccessComponent,
  COMPONENTS.LatestNewsComponent,
  COMPONENTS.CardComponent
];

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: COMPONENTS_LIST,
  exports: [    
    RouterModule,
    CommonModule,
    FormsModule,
    ...COMPONENTS_LIST
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        PROVIDERS.LocalStorageService
      ]
    };
  }
}
