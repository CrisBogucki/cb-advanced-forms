import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {FieldTextComponent} from './fields/field-text/field-text.component';
import {FieldNumberComponent} from './fields/field-number/field-number.component';
import {FieldAreaComponent} from './fields/field-area/field-area.component';
import {FieldDateComponent} from './fields/field-date/field-date.component';
import {SectionComponent} from './sections/section/section.component';
import {RowComponent} from './sections/row/row.component';
import {RowsComponent} from './sections/rows/rows.component';
import {BaseFieldComponent} from "./fields/base-field.component";


@NgModule({
  declarations: [
    BaseFieldComponent,
    FieldTextComponent,
    FieldNumberComponent,
    FieldAreaComponent,
    FieldDateComponent,
    SectionComponent,
    RowComponent,
    RowsComponent,
  ],
  exports: [
    BaseFieldComponent,
    FieldTextComponent,
    FieldNumberComponent,
    FieldDateComponent,
    FieldAreaComponent,
    SectionComponent,
    RowComponent,
    RowsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DesignSystemModule {
}
