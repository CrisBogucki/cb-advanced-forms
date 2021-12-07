import {Component, OnInit} from '@angular/core';
import {Document01Service} from "./document01.service";
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
    let initValue = {
      document: {
        personal:{
          id: '589-145-78-55',
          firstName: 'Anna',
          lastName: 'Nowak',
          birtDate: '1762-02-11',
          birtCity: 'New York',
          nationality: 'Polish',
          sex: 'F',
          fatherName: 'Tom',
          matherName: 'Ellie'
        },
        address: {
          city: 'Berlin',
          street: 'Potsdamer Straße',
          number: '65',
          local: '1',
          zip: '10785'
        },
        opinion: {
          feedback: "OK"
        }
      }
    }
    this.form = this.documentLogic.createForm(initValue);
  }

}
