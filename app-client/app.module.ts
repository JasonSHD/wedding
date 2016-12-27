import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule }     from '@angular/http';

import { NgbModule }      from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports:      [
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule {}
