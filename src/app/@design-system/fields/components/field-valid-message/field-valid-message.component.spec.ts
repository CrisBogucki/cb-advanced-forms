import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldValidMessageComponent } from './field-valid-message.component';

describe('FieldValidMessageComponent', () => {
  let component: FieldValidMessageComponent;
  let fixture: ComponentFixture<FieldValidMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldValidMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldValidMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
