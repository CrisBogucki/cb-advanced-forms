import {Component, OnInit} from '@angular/core';
import {Document01Service} from "../../@document-logic/document01.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'doc-document01',
  templateUrl: './document01.component.html'
})
export class Document01Component implements OnInit {

  form!: FormGroup;

  constructor(public documentLogic: Document01Service, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    let a = {
      document: {
        address: {
          city: 'Gorzów Wiepkopolski',
          street: 'ul. Michała Kleofasa Ogińskiego',
          number: '6c',
          local: '2',
          zip: '66-400'
        }
      }
    }
    this.form = this.documentLogic.createForm(a);
    this.form.valueChanges.subscribe(value => {
      this.emitFormState();
    });
  }

  private emitFormState() {
    console.log({
      isValid: this.form.valid,
      isPristine: this.form.pristine,
      value: this.form.value
    });
  }

}
