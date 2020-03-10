import { Component, OnInit } from '@angular/core';
import { WiktionarySearchService } from '../wiktionary-search.service';

@Component({
  selector: 'app-wiktionary-search',
  templateUrl: './wiktionary-search.component.html',
  styleUrls: ['./wiktionary-search.component.css']
})
export class WiktionarySearchComponent implements OnInit {
  definitions: Object;

  constructor(private wiktionarySearch: WiktionarySearchService) { }

  ngOnInit(): void {
    let truckdefs = this.wiktionarySearch.getTruck();
    const foo = this.wiktionarySearch.getTruck()
        .subscribe((data: Object) => this.definitions = data);
  }

}
