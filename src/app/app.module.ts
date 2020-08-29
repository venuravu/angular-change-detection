import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {MessageComponent} from './message/message.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ,MessageComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
