import {Component, Input, OnInit} from '@angular/core';
import {ControlContainer, FormGroup} from "@angular/forms";

@Component({
  selector: 'dsc-seciotn-personal',
  templateUrl: './seciotn-personal.component.html'
})
export class SeciotnPersonalComponent implements OnInit {

  form!: FormGroup;

  constructor(private controlContainer: ControlContainer) {
  }

  ngOnInit(): void {
    this.form = this.controlContainer.control?.get("personal") as FormGroup;
  }

}
