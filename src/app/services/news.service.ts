import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {
  url = '/api/source/';
  constructor(private http: Http) { }


  // sort by top, latest, or popular
  getNewsFrom(source: String): Observable<any> {
    return this.http.get(this.url + source)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Unable to retrieve articles'));
  }
}
