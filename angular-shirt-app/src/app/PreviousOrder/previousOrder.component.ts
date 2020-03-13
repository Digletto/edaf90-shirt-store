import { Component, OnInit} from '@angular/core';
import { Shirt } from '../models/Shirt';
import { Order } from '../models/Order';

@Component({
    selector: 'app-previousorder',
    templateUrl: './previousOrder.component.html',
    styleUrls: ['./previousOrder.component.css']
  })

  export class PreviousorderComponent implements OnInit{
    orders: Order[];

    constructor() { }

    ngOnInit() {
      this.orders = JSON.parse(localStorage.getItem("orders"));
    }

    shirtFiles : {[key: string]: string} = {
      black : "../../assets/t-shirt-pictures/black_shirt.jpg",
      blue : "../../assets/t-shirt-pictures/blue_shirt.jpg",
      green : "../../assets/t-shirt-pictures/green_shirt.jpg",
      white : "../../assets/t-shirt-pictures/white_shirt.jpg",
      yellow : "../../assets/t-shirt-pictures/yellow_shirt.jpg",
      red : "../../assets/t-shirt-pictures/red_shirt.jpg"       
  }
}
