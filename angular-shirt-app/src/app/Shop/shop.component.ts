import { Component, OnInit } from '@angular/core';


 


@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css']
  })

  export class Shop implements OnInit{


    black : String = "../../assets/t-shirt-pictures/black_shirt.jpg";
    blue : String = "../../assets/t-shirt-pictures/blue_shirt.jpg";
    green : String = "../../assets/t-shirt-pictures/green_shirt.jpg";
    white : String = "../../assets/t-shirt-pictures/white_shirt.jpg";
    yellow : String = "../../assets/t-shirt-pictures/yellow_shirt.jpg";
    red : String = "../../assets/t-shirt-pictures/red_shirt.jpg";
    
    selectedShirt: String = this.white;



    pic: ImageBitmap;


    constructor(){



    }

    ngOnInit() {



    }


    onChange(event: any) {
      this.selectedShirt=event.target.value;


    }


    



      
  }