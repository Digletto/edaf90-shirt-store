import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WiktionarySearchService {

  readonly definitionSubject: Subject<[]>;
  private definitionStore = {};

  httpOptions = {
    headers: new HttpHeaders({
      'accept': 'application/json',
      'charset': 'utf-8',
      'profile': 'https://www.mediawiki.org/wiki/Specs/definition/0.8.0'
    })
  };

  /**
    * Initializes the Subject this service communicates via
    */
  constructor(private http: HttpClient) { 
    this.definitionSubject = new Subject();
  }

  /**
    * Performs an HTTP query against the Wiktionary REST API and returns a
    * Subject which will emit a list of objects containing the term queried,
    * the part of speech for the definition, and the actual definition text
    */
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

  /**
    * Returns a Subject which will emit a list of definitions for a specific
    * language code and a term. This list might be cached in the class
    * variable definitionStore, else it is fetched via the
    * httpRequestDefinitions method
    */
  getDefinitions(langCode: string, term: string) {
    if(langCode in this.definitionStore && term in this.definitionStore[langCode]) {
      this.definitionSubject.next(this.definitionStore[langCode][term]);
    } else {
      this.httpRequestDefinitions(langCode, term).subscribe((newDefinitions: []) => {
        if(!(langCode in this.definitionStore)) {
          this.definitionStore[langCode] = {};
        }
        this.definitionStore[langCode][term] = newDefinitions;
        this.definitionSubject.next(newDefinitions);
      });
    }
  }
}
