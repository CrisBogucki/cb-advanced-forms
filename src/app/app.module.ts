import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormGroupDirective, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {ComponentsModule} from "./@components/components.module";
import {DesignSystemModule} from "./@design-system/design-system.module";

import {Document01Component as Document01_0Component} from './@documents/document01/v1.0/document01.component';
import {Document01Component as Document01_1Component} from './@documents/document01/v1.1/document01.component';
import {Document01Component as Document01_2Component} from './@documents/document01/v1.2/document01.component';

import {Document02Component} from './@documents/document02/v1.1/document02.component';
import { HomeComponent } from './@views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    Document01_0Component,
    Document01_1Component,
    Document01_2Component,
    Document02Component,
    HomeComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    DesignSystemModule,
    ComponentsModule,
  ],
  providers: [FormGroupDirective],
  bootstrap: [AppComponent]
})
export class AppModule {
}
