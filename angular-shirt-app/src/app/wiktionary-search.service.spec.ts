import { TestBed } from '@angular/core/testing';

import { WiktionarySearchService } from './wiktionary-search.service';

describe('WiktionarySearchService', () => {
  let service: WiktionarySearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WiktionarySearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
