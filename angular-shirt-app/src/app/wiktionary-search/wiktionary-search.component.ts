import { Component, OnInit } from '@angular/core';
import { WiktionarySearchService } from '../wiktionary-search.service';

@Component({
  selector: 'app-wiktionary-search',
  templateUrl: './wiktionary-search.component.html',
  styleUrls: ['./wiktionary-search.component.css']
})
export class WiktionarySearchComponent implements OnInit {
  langs = {
    'English': 'en',
  };

  lang = "en";
  term: string;
  selectedDefinition: string;

  definitions: [];

  constructor(private searchService: WiktionarySearchService) { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    let term = form.form.value.searchterm;
    let langCode = form.form.value.searchlanguage;
    let startTime = new Date();
    const subscription = this.searchService.getDefinitions(langCode, term).subscribe((definitions: []) => {
      this.definitions = definitions;
      let timeDiff = new Date().getTime() - startTime.getTime();
      console.log("Time to retrieve definitions: ", timeDiff);
    });
  }
}
