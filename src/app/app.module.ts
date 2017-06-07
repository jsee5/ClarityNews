import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';

import { NewsService } from './services/news.service';
import { SourceService } from './services/source.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ClarityModule.forRoot()
  ],
  providers: [NewsService, SourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
