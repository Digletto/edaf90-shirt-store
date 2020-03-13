import { Component, OnInit} from '@angular/core';
import { Shirt } from '../models/Shirt';
import {Order} from '../models/Order';

@Component({
    selector: 'app-previousorder',
    templateUrl: './previousOrder.component.html',
    styleUrls: ['./previousOrder.component.css']
  })

  export class PreviousorderComponent implements OnInit{
    orders:Order[];

    constructor() { }

    ngOnInit() {
      //for testing, should later be localstorage
      let order1 = new Order([
        new Shirt(
            'XL',
            'blue',
            'pain',
            'noun',
            'What comes from doing this assingment',
            1
        )
      ], "daniel<3pesto@gmail.com", "Kämnärsvägen", "lund", "37", "Sweden");
      let order2 = new Order([
        new Shirt(
        'S',
        'black',
        'pain',
        'noun',
        'What comes from doing this assingment',
        1),
        new Shirt(
        'M',
        'green',
        'pain',
        'noun',
        'What comes from doing this assingment',
        1)
     ], "daniel<3pesto@gmail.com", "Kämnärsvägen", "lund", "37", "Sweden");
      //this.orders = [order1, order2];
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
