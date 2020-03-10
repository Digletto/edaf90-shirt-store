import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { WiktionarySearchComponent } from '../wiktionary-search/wiktionary-search.component';


@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css'],
    entryComponents: [
      WiktionarySearchComponent
    ]
  })

  export class Shop implements OnInit{
<<<<<<< HEAD
    
    
    
    selectedShirt: String = "white";
=======


    black : String = "../../assets/t-shirt-pictures/black_shirt.jpg";
    blue : String = "../../assets/t-shirt-pictures/blue_shirt.jpg";
    green : String = "../../assets/t-shirt-pictures/green_shirt.jpg";
    white : String = "../../assets/t-shirt-pictures/white_shirt.jpg";
    yellow : String = "../../assets/t-shirt-pictures/yellow_shirt.jpg";
    red : String = "../../assets/t-shirt-pictures/red_shirt.jpg";

    selectedShirt: String = this.white;
>>>>>>> 42512b8ee8d9389f36ab6c2018ce391956f9a1de

    tshirts;

    SelectedItem : {[key: string]: String} = {
      color:  "white",
      word: "",
      form: "",
      def: ""
  }

    constructor(){

    }


    

    ngOnInit() {


    }



    


    onChange(event: any) {
      this.selectedShirt=event.target.value;
      this.SelectedItem= {
        color: this.selectedShirt

      }


    }

    onCheckClick() {


      this.tshirts=JSON.parse(localStorage.getItem("tshirts"))
      this.tshirts.push(this.SelectedItem)
      localStorage.setItem("tshirts", JSON.stringify(this.tshirts))
      console.log(this.tshirts)

  }



}
