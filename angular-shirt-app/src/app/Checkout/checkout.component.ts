import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Shirt} from '../models/Shirt';
import {Order} from '../models/Order';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
  })

  export class CheckoutComponent implements OnInit{

    
    constructor(private modalService: NgbModal) {
        
    }

    exampleItem = new Shirt('M', 'red', 'surreptitious', 'Adjective', "kept secret especially because it would not be approved of", 1);
    exampleItem2 = new Shirt('XS', 'black', 'verisimilitude', 'Noun', "the appearence of being true or real",2);

    tshirts = JSON.parse(localStorage.getItem("tshirts"));
    total;

    fname;
    lname;
    email;
    acode;
    country;
    street;
    nbr;
    city;

    modal;

    onPayClick(content) {
        this.modal = this.modalService.open(content);
    }

    onSubmit(form) {
        let orders = JSON.parse(localStorage.getItem("orders"));
        let order = new Order(this.tshirts, 
            form.form.value.email, 
            form.form.value.street, 
            form.form.value.city, 
            form.form.value.acode, 
            form.form.value.country);
        orders.push(order);
        localStorage.setItem("orders", JSON.stringify(orders));
        this.clearOrder();
        console.log(form.form.value.email);
        this.modal.close();
    }

    updatePrice() {
        var shirt;
        var t = 0;
        for (shirt of this.tshirts) {
            t += shirt.price();
        }
        this.total = t;
    }

    updateQuantity(shirt, event) {
        //console.log(event);
        shirt.quantity = event.target.value;
        this.updatePrice();
    }

    clearOrder() {
        let tempArray = [];
        localStorage.setItem("tshirts", JSON.stringify(tempArray));
        this.tshirts = [];
        this.total = 0;
    }

    ngOnInit() {
        
        this.tshirts = JSON.parse(localStorage.getItem("tshirts"));
        //temp for testing REMOVE WHEN SHOP IS WORKING
        this.tshirts = [this.exampleItem, this.exampleItem2];

        this.updatePrice();
    }
  }