import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroup} from "@angular/forms";

@Component({
  selector: 'dsc-section-opinion',
  templateUrl: './section-opinion.component.html',
})
export class SectionOpinionComponent implements OnInit {

  form!: FormGroup;

  constructor(private controlContainer: ControlContainer) {
  }

  ngOnInit(): void {
    this.form = this.controlContainer.control?.get("opinion") as FormGroup;
  }

}
