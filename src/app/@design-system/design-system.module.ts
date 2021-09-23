import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {FieldTextComponent} from './fields/field-text/field-text.component';
import {FieldNumberComponent} from './fields/field-number/field-number.component';
import {FieldAreaComponent} from './fields/field-area/field-area.component';
import {FieldDateComponent} from './fields/field-date/field-date.component';
import {SectionComponent} from './sections/section/section.component';


@NgModule({
  declarations: [
    FieldTextComponent,
    FieldNumberComponent,
    FieldAreaComponent,
    FieldDateComponent,
    SectionComponent,
  ],
  exports: [
    FieldTextComponent,
    FieldNumberComponent,
    FieldDateComponent,
    FieldAreaComponent,
    SectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DesignSystemModule {
}
