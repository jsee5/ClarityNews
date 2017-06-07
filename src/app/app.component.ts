import { Component, OnInit } from '@angular/core';
import { NewsService } from './services/news.service';
import { SourceService } from './services/source.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  articles: any[];
  sources: any[];
  id: string;
  constructor(private newsService: NewsService, private sourceService: SourceService) {
  }

  ngOnInit() {
    this.loadSources();
  }

  loadSources() {
    this.sourceService.getSources().subscribe(
      news => {
        this.sources = news.sources;
      },
      err => {
        console.log('error retrieving sources');
      }
    );
  }

  loadNews() {
    this.newsService.getNewsFrom(this.id).subscribe(
      news => {
        this.articles = news.articles;
      },
      err => {
        console.log('error retrieving articles');
      });
  }

  selectSource(id: string) {
    this.id = id;
    this.loadNews();
  }
}
