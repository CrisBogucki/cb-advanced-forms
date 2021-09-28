import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ControlContainer, FormGroupDirective} from "@angular/forms";
import {BaseFieldComponent} from "../base-field.component";
import {FormValidateService} from "../../utils/form-validate.service";

@Component({
  selector: 'ds-field-area',
  template: `
    <label for="field" class="form-label field-label"> <b *ngIf="showRequiredStar" class="warning-color">*</b> {{label}}
    </label>
    {{ controlName}}
    <textarea class="form-control field" id="field" aria-describedby="fieldHelp"
              formControlName="{{controlName}}" placeholder="{{placeholder}}"></textarea>
    <div id="fieldHelp" class="form-text field-valid-message warning-color">{{message}}</div>
  `,
  styleUrls: ['./../fields.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [{
    provide: ControlContainer,
    useExisting: FormGroupDirective
  }]
})
export class FieldAreaComponent extends BaseFieldComponent implements OnInit, OnDestroy {

  constructor(controlContainer: ControlContainer, formValidateService: FormValidateService) {
    super(controlContainer, formValidateService);
  }

}
