import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ds-rows',
  template: `<section><div class="form"><ng-content></ng-content></div></section>`
})
export class RowsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
