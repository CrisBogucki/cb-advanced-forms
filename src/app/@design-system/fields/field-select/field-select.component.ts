import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ControlContainer, FormGroupDirective} from "@angular/forms";
import {BaseFieldComponent} from "../base-field.component";
import {FormValidateService} from "../../utils/form-validate.service";

@Component({
  selector: 'ds-field-select',
  template: `
    <label for="{{controlName}}_field" class="form-label field-label"><b *ngIf="showRequiredStar" class="warning-color">*</b>{{label}}
    </label>
    <select class="form-control field" id="{{controlName}}_field" formControlName="{{controlName}}">
      <option *ngFor="let item of data" [value]="dataKey != null ? item[dataKey] : 'no definition'">
        {{ dataLabel != null ? item[dataLabel] : 'no definition' }}
      </option>
    </select>
    <div id="{{controlName}}_fieldMessage" class="form-text field-valid-message warning-color">{{message}}</div>
  `,
  styleUrls: ['./../fields.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [{
    provide: ControlContainer,
    useExisting: FormGroupDirective
  }]
})
export class FieldSelectComponent extends BaseFieldComponent implements OnInit, OnDestroy {

  @Input() data?: any;
  @Input() dataKey?: string;
  @Input() dataLabel?: string;

  constructor(controlContainer: ControlContainer, formValidateService: FormValidateService) {
    super(controlContainer, formValidateService);
  }

}
