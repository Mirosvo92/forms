import {Component, Input, OnInit} from '@angular/core';
import {ControlContainer, NgForm} from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class TextInputComponent implements OnInit {

  @Input() testModel;
  @Input() inputTitle;

  constructor() { }

  ngOnInit() {
  }

}
