import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroup} from "@angular/forms";

@Component({
  selector: 'dsc-section-person',
  templateUrl: './section-person.component.html'
})
export class SectionPersonComponent implements OnInit {

  form!: FormGroup;

  constructor(private controlContainer: ControlContainer) {
  }

  ngOnInit(): void {
    this.form = this.controlContainer.control?.get("address") as FormGroup;
  }

}
