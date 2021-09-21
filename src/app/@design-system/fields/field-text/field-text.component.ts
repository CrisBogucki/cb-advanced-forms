import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ds-field-text',
  template: `
    <ds-field-label [name]="label"></ds-field-label>
    <input
      type="text"
      [ngClass]="_valid_message?'field warning-color':'field'"

      [(ngModel)]="value"
      [placeholder]="placeholder?placeholder:''"
      (ngModelChange)="onInputChange()"

    />
    <ds-field-valid-message message="{{_valid_message}}"></ds-field-valid-message>
  `,
  styleUrls: ['./../fields.scss']
})
export class FieldTextComponent implements OnInit {

  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() valid_message?: string;

  value: any;
  _valid_message?: string;

  constructor() {
  }

  ngOnInit(): void {
   this.onInputChange();
  }



  onInputChange() {
    if (this.value === "" || this.value === undefined) {
      this._valid_message = this.valid_message;
    } else {
      this._valid_message = "";
    }
  }
}
