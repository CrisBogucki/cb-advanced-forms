import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ds-field-text',
  template: `
    <ds-field-label></ds-field-label>
    <input type="text" class="field" value="ala ma kota"/>
    <ds-field-valid-message></ds-field-valid-message>
  `,
  styleUrls: ['./../fields.scss']
})
export class FieldTextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
