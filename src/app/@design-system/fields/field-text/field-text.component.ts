import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
  ValidationErrors
} from "@angular/forms";

@Component({
  selector: 'ds-field-text',
  template: `
    <label for="field" class="form-label field-label">{{label}}</label>
    <input type="text" class="form-control field" id="field" aria-describedby="fieldHelp" formControlName="{{controlName}}" placeholder="{{placeholder}}">
    <div id="fieldHelp" class="form-text field-valid-message">field is required</div>
    `,
  styleUrls: ['./../fields.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [{
    provide: ControlContainer,
    useExisting: FormGroupDirective
  }]
})
export class FieldTextComponent implements OnInit {

  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() valid_message?: string;
  @Input() controlName?: string;

  form!: FormGroup;

  constructor(private controlContainer: ControlContainer) {
  }

  ngOnInit(): void {
    let validator: ValidationErrors | null | undefined;
    // @ts-ignore
    validator = this.controlContainer.control?.get(this.controlName.toString())?.validator({} as AbstractControl);
    if (validator && validator.required) {

    }
  }

}
