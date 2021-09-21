import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ds-field-label',
  template: `
    <div class="field-label">
      <label>Nazwa kontrolki</label>
    </div>
  `,
  styleUrls: ['./../../fields.scss']
})
export class FieldLabelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
