import { Component, Output, EventEmitter } from '@angular/core';
import { WiktionarySearchService } from '../wiktionary-search.service';

@Component({
  selector: 'app-wiktionary-search',
  templateUrl: './wiktionary-search.component.html',
  styleUrls: ['./wiktionary-search.component.css']
})

export class WiktionarySearchComponent {

  @Output() messageEvent = new EventEmitter<{}>();

  // NOTE: the Wiktionary REST API is only implemented for English (I think?)
  langs = {
    'English': 'en',
    //'Français': 'fr',
    //'Svenska': 'sv',
  };

  lang: string = "en";
  term: string = "";
  startTime: Date;

  definitions: [];

  /**
    * Subscribes to the wiktionary search service and sets the callback for
    * handling when new definitions come in
    */
  constructor(private searchService: WiktionarySearchService) {
    const subscription = this.searchService.definitionSubject.subscribe((definitions: []) => {
      this.definitions = definitions;
      let timeDiff = new Date().getTime() - this.startTime.getTime();
      console.log("Time to retrieve definitions: ", timeDiff);
    });
  }

  /**
    * Removes the active attribute from all elements containing definitions
    * and sets the clicked one as active. Emits the selected definition to
    * the Shop component so that it can update its form
    */
  onDefinitionSelect(event: any) {
    let elems = document.querySelectorAll('#definition-results .active');
    for(let n = 0; n < elems.length; n++) {
      elems[n].classList.remove("active");
    }

    event.target.classList.add("active");
    this.messageEvent.emit({
      term: event.target.getAttribute("data-term"),
      partOfSpeech: event.target.getAttribute("data-partOfSpeech"),
      text: event.target.getAttribute("data-text"),
    });
  }

  /**
    * Initiates a request to the wiktionary search component for definitions
    */
  onSubmit(form) {
    let term = form.form.value.searchterm;
    let langCode = form.form.value.searchlanguage;
    this.startTime = new Date();
    this.searchService.getDefinitions(langCode, term);
  }
}
