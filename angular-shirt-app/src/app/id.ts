import { Injectable } from '@angular/core';

@Injectable()
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
