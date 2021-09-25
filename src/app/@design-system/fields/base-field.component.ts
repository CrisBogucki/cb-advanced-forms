import {Component, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {ControlContainer, FormGroup, Validators} from "@angular/forms";
import {FormValidateService} from "../utils/form-validate.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'ds-field-base',
  template: ``,
})
export class BaseFieldComponent implements OnInit, OnDestroy {

  @HostBinding('class') class = '';

  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() controlName?: string;

  @Input() colXs?: string;
  @Input() colSm?: string;
  @Input() colMd?: string;
  @Input() colLg?: string;


  form!: FormGroup;
  message?: string;
  subscribeObj?: Subscription;
  showRequiredStar: boolean = false;

  constructor(private controlContainer: ControlContainer, private formValidateService: FormValidateService) {
  }

  ngOnInit(): void {
    this.sizeSetup();
    this.errorHandler();
    this.requiredHandler();
  }

  errorHandler(): void {
    const control = this.controlContainer.control?.get(String(this.controlName))
    if (control) {
      this.subscribeObj = control?.valueChanges?.subscribe(() => {
        const error = control?.errors;
        this.message = this.formValidateService.createMessageError(error);
      });
    }
  }

  requiredHandler(): void {
    const control = this.controlContainer.control?.get(String(this.controlName))
    if (control) {
      if (control.hasValidator(Validators.required)) {
        this.showRequiredStar = true;
      }
    }
  }

  sizeSetup(): void{
    this.colXs !== undefined ? this.class += ` col-${this.colXs}`:'';
    this.colSm !== undefined ? this.class += ` col-sm-${this.colSm}`:'';
    this.colMd !== undefined ? this.class += ` col-md-${this.colMd}`:'';
    this.colLg !== undefined ? this.class += ` col-lg-${this.colLg}`:'';
  }

  ngOnDestroy(): void {
    this.subscribeObj?.unsubscribe();
  }
}
