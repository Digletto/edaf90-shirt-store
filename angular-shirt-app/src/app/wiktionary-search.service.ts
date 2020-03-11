import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

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

  httpRequestDefinitions(langCode: string, term: string) {
    let subject = new BehaviorSubject({});
    term = encodeURIComponent(term);
    let rawDefs = this.http.get(`https://${langCode}.wiktionary.org/api/rest_v1/page/definition/${term}?redirect=false`).subscribe((response: Object) => {
      subject.next("(New definitions from wiktionary)");
    });
    // definition.definition = definition.definition.replace(/<.*?>/g, "");
    return subject;
  }

  getDefinitions(langCode: string, term: string) {
    //check against store, if store doesn't have it, do a httpRequestDefinitions
    const definitionSubject = new BehaviorSubject({});
    if(false) { // if store already contains definitions
      // return definitions from store
    } else {
      this.httpRequestDefinitions(langCode, term).subscribe((newDefinitions: Object) => {
        // add new definitions to store
        console.log("getdefinitions next asdf");
        definitionSubject.next(newDefinitions);
      });
    }
    return definitionSubject;
  }
}
