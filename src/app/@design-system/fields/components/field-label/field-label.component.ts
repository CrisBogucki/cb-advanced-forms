import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ds-field-label',
  template: `
    <div class="field-label">
      <label>{{name}}</label>
    </div>
  `,
  styleUrls: ['./../../fields.scss']
})
export class FieldLabelComponent implements OnInit {

  constructor() { }

  @Input() name?: string;

  ngOnInit(): void {
  }

}
