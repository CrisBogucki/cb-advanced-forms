import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: ' ds-section',
  templateUrl: './section.component.html',
  styleUrls: ['./../sections.scss']
})
export class SectionComponent implements OnInit {

  @Input() title?: string
  @Input() showIcon: any;
  @Input() jsonStructureElementName?: string
  @Input() headings: string = "5";

  component?: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
