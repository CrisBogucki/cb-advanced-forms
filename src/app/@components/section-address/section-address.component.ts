import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroup} from "@angular/forms";

@Component({
  selector: 'dsc-section-address',
  templateUrl: './section-address.component.html'
})
export class SectionAddressComponent implements OnInit {

  form!: FormGroup;

  constructor(private controlContainer: ControlContainer) {
  }

  ngOnInit(): void {
    this.form = this.controlContainer.control?.get("address") as FormGroup;
  }

}
