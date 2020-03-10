import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiktionarySearchComponent } from './wiktionary-search.component';

describe('WiktionarySearchComponent', () => {
  let component: WiktionarySearchComponent;
  let fixture: ComponentFixture<WiktionarySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiktionarySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiktionarySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
