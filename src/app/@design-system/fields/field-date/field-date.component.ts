import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ds-field-date',
  template: `<input type="text" class="field">`,
  styleUrls: ['./../fields.scss']
})
export class FieldDateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
