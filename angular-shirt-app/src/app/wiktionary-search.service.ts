import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WiktionarySearchService {

  definitionStore = {};

  httpOptions = {
    headers: new HttpHeaders({
      'accept': 'application/json',
      'charset': 'utf-8',
      'profile': 'https://www.mediawiki.org/wiki/Specs/definition/0.8.0'
    })
  };

  constructor(private http: HttpClient) { }

  httpRequestDefinitions(langCode: string, term: string) {
    term = encodeURIComponent(term);
    let subject = new Subject();
    let rawDefs = this.http.get(`https://${langCode}.wiktionary.org/api/rest_v1/page/definition/${term}?redirect=false`).subscribe((response: Object) => {
      let definitions = [];
      for(let definitionArea of response[langCode]) {
        for(let replyDefinition of definitionArea.definitions) {
          let text = replyDefinition.definition.replace(/<.*?>/g, '');
          let definition = {
            term: term,
            partOfSpeech: definitionArea.partOfSpeech,
            text: text
          };
          definitions.push(definition);
        }
      }
      subject.next(definitions);
    });
    return subject;
  }

  getDefinitions(langCode: string, term: string) {
    //check against store, if store doesn't have it, do a httpRequestDefinitions
    const definitionSubject = new Subject();
    if(langCode in this.definitionStore && term in this.definitionStore[langCode]) { // if store already contains definitions
      definitionSubject.next(this.definitionStore[langCode][term]);
    } else {
      this.httpRequestDefinitions(langCode, term).subscribe((newDefinitions: []) => {
        if(!(langCode in this.definitionStore)) {
          this.definitionStore[langCode] = {};
        }
        this.definitionStore[langCode][term] = newDefinitions;
        definitionSubject.next(newDefinitions);
      });
    }
    return definitionSubject;
  }
}
