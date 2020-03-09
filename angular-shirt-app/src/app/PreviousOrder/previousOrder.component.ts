import { Component, OnInit} from '@angular/core';
//import { Shirt } from '../models/Shirt';
import {Order} from '../models/Order';

@Component({
    selector: 'app-previousorder',
    templateUrl: './previousOrder.component.html',
    styleUrls: ['./previousOrder.component.css']
  })

  export class PreviousorderComponent implements OnInit{
    orders:Order[]

    constructor() { }

    ngOnInit() {
      //for testing, should later be localstorage
      this.orders = [
        {
          id: 1,
          shirts: [
            {
              size: 'XL',
              color: 'blue',
              text: "pain (countable and uncountable, plural pains) \n 1. What comes from doing this assignment",
              cost: 3
            }
          ],
          totalcost: 3
        },
        {
          id: 2,
          shirts: [
            {
              size: 'S',
              color: 'black',
              text: "pain (countable and uncountable, plural pains) \n 1. What comes from doing this assignment",
              cost: 3
            },
            {
              size: 'M',
              color: 'green',
              text: "pain (countable and uncountable, plural pains) \n 1. What comes from doing this assignment",
              cost: 3
            }
          ],
          totalcost: 6
        }
      ]
    }
  }
