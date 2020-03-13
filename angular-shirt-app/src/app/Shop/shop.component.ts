import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import {Shirt} from '../models/Shirt'



@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css']
  })

  export class Shop implements OnInit {

    selectedShirt: Shirt;
    selectedShirtColor: string = "white";
    selectedShirtSize: string = "Small";
    selectedShirtQuantity: number = 1;

    selectedShirtTerm: string;
    selectedShirtPartOfSpeech: string;
    selectedShirtDefinition: string;


    tshirts;


    constructor(){
      this.selectedShirt = new Shirt("Medium","white","","","",1);
    }




    ngOnInit() {


    }

    receiveMessage(event) {
      this.selectedShirtTerm = event.term;
      this.selectedShirtPartOfSpeech = event.partOfSpeech;
      this.selectedShirtDefinition = event.text;
    }

    onChangeQuantity(event: any) {
      this.selectedShirt.quantity= event.target.value;

    }

    onChangeColor(event: any) {
      this.selectedShirt.color = event.target.value;
      this.selectedShirtColor = this.selectedShirt.color;

    }


    onChangeSize(event: any) {
      this.selectedShirt.size= event.target.value

    }

    resetForm() {
      this.selectedShirtColor = "white";
      this.selectedShirtSize = "Small";
      this.selectedShirtQuantity = 1;
    }

    onSubmitForm() {
      this.selectedShirt.word = this.selectedShirtTerm;
      this.selectedShirt.form = this.selectedShirtPartOfSpeech;
      this.selectedShirt.def = this.selectedShirtDefinition;

      this.tshirts = JSON.parse(localStorage.getItem("tshirts"))

      this.tshirts.push(this.selectedShirt)

      localStorage.setItem("tshirts", JSON.stringify(this.tshirts))

      console.log(this.tshirts)

      this.resetForm();
    }

}
