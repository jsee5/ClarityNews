import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';

import { NewsService } from './services/news.service';
import { SourceService } from './services/source.service';


const Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'news',
    component: AppComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClarityModule.forRoot(),
    RouterModule.forRoot(Routes)
  ],
  providers: [NewsService, SourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
