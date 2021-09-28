import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DesignSystemModule} from '../@design-system/design-system.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


import {SectionAddressComponent} from './section-address/section-address.component';
import {SectionCompanyComponent} from './section-company/section-company.component';
import {DocumentComponent} from './document/document.component';
import {DocumentHeaderComponent} from './document-header/document-header.component';
import {SeciotnPersonalComponent} from './seciotn-personal/seciotn-personal.component';
import { SectionOpinionComponent } from './section-opinion/section-opinion.component';


@NgModule({
  declarations: [
    SectionAddressComponent,
    SectionCompanyComponent,
    DocumentComponent,
    DocumentHeaderComponent,
    SeciotnPersonalComponent,
    SectionOpinionComponent
  ],
    exports: [
        SectionAddressComponent,
        SectionCompanyComponent,
        DocumentComponent,
        DocumentHeaderComponent,
        SeciotnPersonalComponent,
        SectionOpinionComponent
    ],
  imports: [
    CommonModule,
    DesignSystemModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule {
}
