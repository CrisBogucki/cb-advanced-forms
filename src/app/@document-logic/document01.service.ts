import {Injectable} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class Document01Service {

  private form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  createForm(initialValue?: any) {
    this.form = this.formBuilder.group({
      document: this.formBuilder.group({
        address: this.formBuilder.group({
          street: ['', Validators.required],
          city: ['', Validators.required],
          number: ['', Validators.required],
          local: ['', Validators.required],
          zip: ['', Validators.required],
        })
      })
    })

    if (initialValue) {
      this.form.patchValue(initialValue);
    }

    return this.form;
  }


}
