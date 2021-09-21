import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ds-field-text',
  template: `
    <ds-field-label [name]="label"></ds-field-label>
    <input type="text" class="field" [placeholder]="placeholder" required=""/>
    <ds-field-valid-message></ds-field-valid-message>
  `,
  styleUrls: ['./../fields.scss']
})
export class FieldTextComponent implements OnInit {

  @Input() label?: string;
  @Input() placeholder?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
