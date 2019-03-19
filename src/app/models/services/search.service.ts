import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import {Show} from '../Show';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url = 'http://api.tvmaze.com/search/shows?q=';

  constructor(private http: HttpClient) { }

  getHint(search: string): Observable<Show[]> {
    return this.http.get<Show[]>(this.url + search);
  }
}
