import { Component,Input, ChangeDetectionStrategy } from "@angular/core";
import {Person} from '../model/person';

@Component({
  selector:'app-message',
  changeDetection:ChangeDetectionStrategy.OnPush,
  template:`
            <h1>Hello {{person.firstName}} {{person.lastName}}</h1>
           `
})
export class MessageComponent{

  @Input() person:Person;
}