import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule }     from '@angular/http';

import { NgbModule }      from '@ng-bootstrap/ng-bootstrap';

import { Md5 }            from 'ts-md5/dist/md5';

@NgModule({
  imports:      [
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule,
    Md5
  ],
  declarations: [
    AppComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule {}
