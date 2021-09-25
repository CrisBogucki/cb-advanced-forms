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
        personal:{
          id: '589-145-78-55',
          firstName: 'John',
          lastName: 'Bush',
          birtDate: '1762-02-11',
          birtCity: 'New York',
          nationality: 'USA',
          sex: 'Men',
          fatherName: 'Tom',
          matherName: 'Ellie'
        },
        address: {
          city: 'New York',
          street: 'Brooklyn',
          number: '27c',
          local: '2',
          zip: '11213'
        }
      }
    }
    this.form = this.documentLogic.createForm(a);
    this.form.valueChanges.subscribe(value => {
      //this.emitFormState();
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
