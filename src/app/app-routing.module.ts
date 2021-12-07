import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Document01Component as Document01_0Component} from "./@documents/document01/v1.0/document01.component";
import {Document01Component as Document01_1Component} from "./@documents/document01/v1.1/document01.component";
import {Document01Component as Document01_2Component} from "./@documents/document01/v1.2/document01.component";

import {Document02Component} from "./@documents/document02/v1.1/document02.component";
import {HomeComponent} from "./@views/home/home.component";

const routes: Routes = [
  {path: 'document1/v1.0', component: Document01_0Component},
  {path: 'document1/v1.1', component: Document01_1Component},
  {path: 'document1/v1.2', component: Document01_2Component},

  {path: 'document2/v1.1', component: Document02Component},
  {path: '', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
