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
      result = "Field is required"
    }

    if (error?.min){
      if (error?.min.actual < error?.min.min) {
        result = `Field must be greater than ${error?.min.min}`;
      }
    }

    return result;
  }

}
