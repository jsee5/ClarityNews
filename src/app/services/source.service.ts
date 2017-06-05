import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SourceService {
  private sourceUrl = '/api/sources';
  constructor(private http: Http) { }

  getSources(): Observable<any> {
    return this.http.get(this.sourceUrl)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Unable to retrieve new sources'));
  }
}
