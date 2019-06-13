import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloModule } from 'cofi-hello-app/dist'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HelloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
