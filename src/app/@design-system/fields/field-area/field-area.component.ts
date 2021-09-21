import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ds-field-area',
  template: `<input type="text" class="field">`,
  styleUrls: ['./../fields.scss']
})
export class FieldAreaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
