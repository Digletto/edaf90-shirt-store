import { Shirt } from './Shirt';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Id } from '../id';

function calculateCost(shirts:Shirt[]) {
    let cost = 0;
    shirts.forEach(shirt => {
        cost = cost + shirt.cost*shirt.quantity;
    });
    return cost;
}

export class Order implements OnInit{
    id:number;
    shirts:Shirt[];
    totalcost:number;
    email:string;
    address:string;
    city:string;
    postalnr:string;
    country:string;

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
    ngOnInit() {
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