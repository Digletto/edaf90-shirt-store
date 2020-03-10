import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WiktionarySearchService {
  httpOptions = {
    headers: new HttpHeaders({
      'accept': 'application/json',
      'charset': 'utf-8',
      'profile': 'https://www.mediawiki.org/wiki/Specs/definition/0.8.0'
    })
  };

  constructor(private http: HttpClient) { }

  getTruck() {
    let term = "truck"
    term = encodeURIComponent(term);
    console.info("performing http request");
    return this.http.get("https://en.wiktionary.org/api/rest_v1/page/definition/" + term + "?redirect=false");
  }
}
