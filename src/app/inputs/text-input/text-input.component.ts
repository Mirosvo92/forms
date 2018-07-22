import {Component, Input, OnInit, Optional} from '@angular/core';
import {ControlContainer, NgForm} from '@angular/forms';

function controlContainerFactory(controlContainer?: ControlContainer) {
  return controlContainer;
}

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: controlContainerFactory,
      deps: [[new Optional(), NgForm]]
    }
  ]
})

export class TextInputComponent implements OnInit {

  @Input() testModel;
  @Input() inputTitle;
  @Input() name;
  first = 'sdf';
  second = 'second';

  constructor() { }

  ngOnInit() {
    // this.name = [this.name];
    // this.testModel = [this.testModel];
  }

  ddddd() {
    this.testModel = [this.testModel];
  }

  onBlurMethod() {
    this.testModel = [this.testModel];
  }

}
