import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WiktionarySearchService } from '../wiktionary-search.service';

@Component({
  selector: 'app-wiktionary-search',
  templateUrl: './wiktionary-search.component.html',
  styleUrls: ['./wiktionary-search.component.css']
})
export class WiktionarySearchComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<{}>();

  langs = {
    'English': 'en',
  };

  lang = "en";
  term: string;

  definitions: [];

  constructor(private searchService: WiktionarySearchService) { }

  ngOnInit(): void {
  }

  onDefinitionSelect(event: any) {
    let elems = document.querySelectorAll('#definition-results .active');
    for(let n = 0; n < elems.length; n++) {
      elems[n].classList.remove("active");
    }

    event.target.classList.add("active");
    console.log(event.target);
    this.messageEvent.emit({
      term: event.target.getAttribute("data-term"),
      partOfSpeech: event.target.getAttribute("data-partOfSpeech"),
      text: event.target.getAttribute("data-text"),
    });
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
