import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignSystemModule } from '../@design-system/design-system.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { SectionPersonComponent } from './section-person/section-person.component';
import { SectionAddressComponent } from './section-address/section-address.component';
import { SectionCompanyComponent } from './section-company/section-company.component';


@NgModule({
  declarations: [
    SectionPersonComponent,
    SectionAddressComponent,
    SectionCompanyComponent
  ],
  exports: [
    SectionPersonComponent,
    SectionAddressComponent,
    SectionCompanyComponent
  ],
  imports: [
    CommonModule,
    DesignSystemModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
