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
    
    
    
    selectedShirt: String = "white";

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
