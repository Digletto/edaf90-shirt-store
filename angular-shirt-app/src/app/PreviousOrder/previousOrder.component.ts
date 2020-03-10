import { Component, OnInit} from '@angular/core';
//import { Shirt } from '../models/Shirt';
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
        {
          size: 'XL',
          color: 'blue',
          word: 'pain',
          form: 'noun',
          def: 'What comes from doing this assingment',
          quantity: 1,
          cost: 3
        }
      ], "daniel<3pesto@gmail.com", "Kämnärsvägen", "lund", "37", "Sweden");
      let order2 = new Order([{
        size: 'S',
        color: 'black',
        word: 'pain',
        form: 'noun',
        def: 'What comes from doing this assingment',
        quantity: 1,
        cost: 3
      },
      {
        size: 'M',
        color: 'green',
        word: 'pain',
        form: 'noun',
        def: 'What comes from doing this assingment',
        quantity: 1,
        cost: 3
      }], "daniel<3pesto@gmail.com", "Kämnärsvägen", "lund", "37", "Sweden");
      this.orders = [order1, order2];

      /*
      this.orders = [
        {
          id: 1,
          shirts: [
            {
              size: 'XL',
              color: 'blue',
              word: 'pain',
              form: 'noun',
              def: 'What comes from doing this assingment',
              quantity: 1,
              cost: 3
            }
          ],
          email: "daniel<3pesto@gmail.com",
          address: "Kämnärsvägen",
          postalnr: "37",
          city: "Lund",
          country: "Sweden",
          totalcost: 3
        },
        {
          id: 2,
          shirts: [
            {
              size: 'S',
              color: 'black',
              word: 'pain',
              form: 'noun',
              def: 'What comes from doing this assingment',
              quantity: 1,
              cost: 3
            },
            {
              size: 'M',
              color: 'green',
              word: 'pain',
              form: 'noun',
              def: 'What comes from doing this assingment',
              quantity: 1,
              cost: 3
            }
          ],
          email: "daniel<3pesto@gmail.com",
          address: "Kämnärsvägen",
          postalnr: "37",
          city: "Lund",
          country: "Sweden",
          totalcost: 6
        }
      ]
      **/
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
