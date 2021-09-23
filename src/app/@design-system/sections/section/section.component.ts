import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ds-section',
  templateUrl: './section.component.html',
  styleUrls: ['./../sections.scss']
})
export class SectionComponent implements OnInit {

  @Input() title?: string

  component?: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
