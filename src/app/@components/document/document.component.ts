import {AfterViewInit, ChangeDetectionStrategy, Component, HostBinding, Input, OnInit} from '@angular/core';
import {ControlContainer, FormGroup, FormGroupDirective} from "@angular/forms";

@Component({
  selector: 'dsc-document',
  templateUrl: './document.component.html',
  styleUrls: ['./../components.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [{
    provide: ControlContainer,
    useExisting: FormGroupDirective
  }]
})
export class DocumentComponent implements OnInit, AfterViewInit {

  @HostBinding('formGroupName') host = '';
  @Input() jsonElement?: string

  constructor() {
  }

  ngOnInit(): void {
    //this.jsonElement !== undefined ? this.host += `document` : '';
    //formGroupName="document"

  }

  ngAfterViewInit(): void {
    this.jsonElement !== undefined ? this.host += `document` : '';
  }

}
