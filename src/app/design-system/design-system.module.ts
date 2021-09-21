import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldTextComponent } from './fields/field-text/field-text.component';
import { FieldNumberComponent } from './fields/field-number/field-number.component';
import { FieldAreaComponent } from './fields/field-area/field-area.component';
import { FieldDateComponent } from './fields/field-date/field-date.component';



@NgModule({
  declarations: [
    FieldTextComponent,
    FieldNumberComponent,
    FieldAreaComponent,
    FieldDateComponent
  ],
  exports: [
    FieldTextComponent,
    FieldNumberComponent,
    FieldDateComponent,
    FieldAreaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DesignSystemModule { }
