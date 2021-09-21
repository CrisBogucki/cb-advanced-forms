import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ds-field-valid-message',
  template: `
    <div class="field-valid-message">{{message}}</div>
  `,
  styleUrls: ['./../../fields.scss']
})
export class FieldValidMessageComponent implements OnInit {

  @Input() message?: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
