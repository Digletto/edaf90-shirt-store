import { Component, OnInit } from '@angular/core';
import { WiktionarySearchService } from '../wiktionary-search.service';

@Component({
  selector: 'app-wiktionary-search',
  templateUrl: './wiktionary-search.component.html',
  styleUrls: ['./wiktionary-search.component.css']
})
export class WiktionarySearchComponent implements OnInit {
  langs = {
    'Svenska': 'sv',
    'English': 'en',
  };
  defaultOption = "English";
  lang: "en";
  definitions: Object;
  submitted = false;

  constructor(private searchService: WiktionarySearchService) { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    this.submitted = true;
    console.log("subimitted");
    console.log(form);
    const subscription = this.searchService.getDefinitions("en", "truck").subscribe((definitions: Object) => {
      this.definitions = JSON.stringify(definitions);
      console.log(this.definitions);
    });
  }
}
