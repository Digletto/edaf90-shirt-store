import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
  })

  export class CheckoutComponent{

    constructor(private modalService: NgbModal) {}

    exampleItem : {[key: string]: string} = {
        color: "red",
        word: "surreptitious",
        form: "adjective",
        def: "kept secret especially because it would not be approved of."
    }

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
  }