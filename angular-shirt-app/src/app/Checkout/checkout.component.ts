import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Shirt} from '../models/Shirt';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
  })

  export class CheckoutComponent implements OnInit{
    
    constructor(private modalService: NgbModal) {
        //this.updatePrice();
    }

    exampleItem = new Shirt('M', 'red', 'surreptitious', 'Adjective', "kept secret especially because it would not be approved of", 1);
    exampleItem2 = new Shirt('XS', 'black', 'verisismilitude', 'Noun', "the appearence of being true or real",2);

    tshirts;
    total;

    onPayClick(content) {
        this.modalService.open(content);
    }

    submitOrder() {
        
    }

    updatePrice() {
        var shirt;
        var t = 0;
        for (shirt of this.tshirts) {
            t += parseFloat(shirt.cost);
        }
        this.total = t;
    }

    ngOnInit() {
        this.tshirts = JSON.parse(localStorage.getItem("tshirts"));
        //temp for testing
        this.tshirts = [this.exampleItem, this.exampleItem2];

        this.updatePrice();
    }
  }