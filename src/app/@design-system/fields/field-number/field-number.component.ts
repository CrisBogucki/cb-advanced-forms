import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ds-field-number',
  template: `<input type="text" class="field">`,
  styleUrls: ['./../fields.scss']
})
export class FieldNumberComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
