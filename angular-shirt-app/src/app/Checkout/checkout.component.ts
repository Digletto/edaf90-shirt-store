import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
  })

  export class CheckoutComponent implements OnInit{
    
    constructor(private modalService: NgbModal) {
        //this.updatePrice();
    }

    exampleItem : {[key: string]: string} = {
        color: "red",
        word: "surreptitious",
        form: "adjective",
        def: "kept secret especially because it would not be approved of",
        size: "S",
        cost: "89"
    }

    exampleItem2 : {[key: string]: string} = {
        color: "black",
        word: "verisimilitude",
        form: "noun",
        def: "the appearence of being true or real",
        size: "M",
        cost: "79"
    }

    tshirts;
    total;
    //total = parseInt(this.exampleItem.cost) + parseInt(this.exampleItem2.cost);
    /**if (exampleItem.def.length >= 50) {
    *exampleItem.def = exampleItem.def.substring(0, 50) + '...';
    *}
    */  

    shirtFiles : {[key: string]: string} = {
        black : "../../assets/t-shirt-pictures/black_shirt.jpg",
        blue : "../../assets/t-shirt-pictures/blue_shirt.jpg",
        green : "../../assets/t-shirt-pictures/green_shirt.jpg",
        white : "../../assets/t-shirt-pictures/white_shirt.jpg",
        yellow : "../../assets/t-shirt-pictures/yellow_shirt.jpg",
        red : "../../assets/t-shirt-pictures/red_shirt.jpg"       
    }

    onPayClick() {
        this.modalService.open("Processing Your Payment...");
    }

    updatePrice() {
        var shirt;
        var t = 0;
        for (shirt of this.tshirts) {
            t += parseInt(shirt.cost);
        }
        this.total = t;
    }

    ngOnInit() {
        //this.tshirts = JSON.parse(localStorage.getItem("tshirts"));

        //temp for testing
        this.tshirts = [this.exampleItem, this.exampleItem2];

        this.updatePrice();
    }
  }