import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

import {FieldLabelComponent} from './fields/components/field-label/field-label.component';
import {FieldValidMessageComponent} from './fields/components/field-valid-message/field-valid-message.component';
import {FieldTextComponent} from './fields/field-text/field-text.component';
import {FieldNumberComponent} from './fields/field-number/field-number.component';
import {FieldAreaComponent} from './fields/field-area/field-area.component';
import {FieldDateComponent} from './fields/field-date/field-date.component';


@NgModule({
  declarations: [
    FieldLabelComponent,
    FieldValidMessageComponent,
    FieldTextComponent,
    FieldNumberComponent,
    FieldAreaComponent,
    FieldDateComponent,
  ],
  exports: [
    FieldLabelComponent,
    FieldValidMessageComponent,
    FieldTextComponent,
    FieldNumberComponent,
    FieldDateComponent,
    FieldAreaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DesignSystemModule {
}
