import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputComponent } from './text-input.component';
import {ControlContainer, FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {CodeDrivenComponent} from '../../code-driven/code-driven.component';

describe('TextInputComponent', () => {
  let component: TextInputComponent;
  let fixture: ComponentFixture<TextInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TextInputComponent, CodeDrivenComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule
      ],
      viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
