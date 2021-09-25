import {Injectable} from '@angular/core';
import {ValidationErrors, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FormValidateService {

  constructor() {
  }

  createMessageError(error: any): string {
    let result: string = "";

    if (error?.required == true) {
      result = "Pole jest wymagane"
    }

    return result;
  }

}
