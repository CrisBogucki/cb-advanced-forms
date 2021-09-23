import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ComponentsModule} from "./@components/components.module";
import {FormGroupDirective, ReactiveFormsModule} from "@angular/forms";
import { Document01Component } from './@documents/document01/document01.component';
import { Document02Component } from './@documents/document02/document02.component';
import {DesignSystemModule} from "./@design-system/design-system.module";

@NgModule({
  declarations: [
    AppComponent,
    Document01Component,
    Document02Component
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    DesignSystemModule,
  ],
  providers: [FormGroupDirective],
  bootstrap: [AppComponent]
})
export class AppModule {
}
