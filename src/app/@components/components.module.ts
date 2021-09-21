import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdressComponent } from './adress/adress.component';
import { DesignSystemModule } from '../@design-system/design-system.module';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AdressComponent
  ],
  exports: [
    AdressComponent
  ],
  imports: [
    CommonModule,
    DesignSystemModule,
    FormsModule
  ]
})
export class ComponentsModule { }
