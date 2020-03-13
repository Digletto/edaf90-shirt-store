import { Injectable } from '@angular/core';

@Injectable()

/**
  * Used as a unique ID for each order in a session
  */
export class Id {
    static lastId = 0;
    constructor() {
    }
    static newId() {
        this.lastId++;
        return this.lastId;
    }
    static getId() {
        return this.lastId;
    }

}
