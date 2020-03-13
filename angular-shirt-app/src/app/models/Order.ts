import { Shirt } from './Shirt';
import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Id } from '../id';

function calculateCost(shirts:Shirt[]) {
  let cost = 0;
  shirts.forEach(shirt => {
    cost = cost + shirt.cost*shirt.quantity;
  });
  return cost;
}

export class Order {
  private id:         number;
  private shirts:     Shirt[];
  private totalcost:  number;
  private email:      string;
  private address:    string;
  private city:       string;
  private postalnr:   string;
  private country:    string;

  constructor(shirts:Shirt[], email:string, address:string, city:string, postalnr:string, country:string) {
    this.id = Id.newId();
    this.shirts = shirts;
    this.totalcost = calculateCost(this.shirts);
    this.email = email;
    this.address = address;
    this.city = city;
    this.postalnr = postalnr;
    this.country = country;
  }

  onChange(event: any) {
    this.totalcost = calculateCost(this.shirts);
  }

  changeQuantity(shirtIndex:number, quantity:number) {
    this.shirts[shirtIndex].quantity = quantity;
  }

  addToQuantity(shirtIndex:number) {
    this.shirts[shirtIndex].quantity++;
  }

  RemoveFromQuantity(shirtIndex:number) {
    this.shirts[shirtIndex].quantity--;
    if (this.shirts[shirtIndex].quantity === 0) {
      this.shirts.splice(shirtIndex,1)
    }
  }
}
