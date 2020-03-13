import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Shirt } from '../models/Shirt'

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css']
  })

  export class Shop implements AfterViewInit {

    selectedShirt: Shirt;
    selectedShirtColor: string = "white";
    selectedShirtSize: string = "S";
    selectedShirtQuantity: number = 1;

    selectedShirtTerm: string;
    selectedShirtPartOfSpeech: string;
    selectedShirtDefinition: string;


    tshirts;


    constructor(){
      this.selectedShirt = new Shirt("S", "white", "", "", "", 1, "");
    }

    /**
      * Draws the text on the canvas
      */
    drawText(canvas: any, text: string) {
      let context = canvas.getContext('2d');
      var maxWidth = canvas.width * 0.3;
      var lineHeight = 26;
      var x = 20 + (canvas.width - maxWidth) / 2; //almost center the text
      var y = 240;

      context.font = '24pt Calibri';
      context.fillStyle = '#333';

      var words = text.split(' ');
      var line = '';

      for(var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
          context.fillText(line, x, y);
          line = words[n] + ' ';
          y += lineHeight;
        }
        else {
          line = testLine;
        }
      }
      context.fillText(line, x, y);
    }

    drawShirt(color: string, text: string) {
      let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('myCanvas');
      let context = canvas.getContext("2d");
      let parent = canvas.parentElement;

      canvas.style.width = parent.offsetWidth + "px";
      canvas.style.height = ((1000 / 911) * parent.offsetWidth) + "px";
      console.log(canvas.style.width);
      console.log(canvas.style.height);

      var img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
        this.drawText(canvas, text);
      };
      img.src = `../../assets/t-shirt-pictures/${color}_shirt.jpg`;
    }

    updateShirt() {
      if(this.selectedShirtTerm == null) {
        this.drawShirt(this.selectedShirtColor, "");
      } else {
        this.drawShirt(this.selectedShirtColor, `${this.selectedShirtTerm} (${this.selectedShirtPartOfSpeech}): ${this.selectedShirtDefinition}`);
      }
    }

    ngAfterViewInit() {
      this.updateShirt();
    }

    receiveMessage(event) {
      this.selectedShirtTerm = event.term;
      this.selectedShirtPartOfSpeech = event.partOfSpeech;
      this.selectedShirtDefinition = event.text;

      this.updateShirt();
    }

    onChangeQuantity(event: any) {
      this.selectedShirt.quantity = event.target.value;

    }

    onChangeColor(event: any) {
      this.selectedShirt.color = event.target.value;
      this.selectedShirtColor = this.selectedShirt.color;

      this.updateShirt();
    }


    onChangeSize(event: any) {
      this.selectedShirt.size = event.target.value

    }

    resetForm() {
      this.selectedShirtColor = "white";
      this.selectedShirtSize = "S";
      this.selectedShirtQuantity = 1;
    }

    onSubmitForm() {
      this.selectedShirt.word = this.selectedShirtTerm;
      this.selectedShirt.form = this.selectedShirtPartOfSpeech;
      this.selectedShirt.def = this.selectedShirtDefinition;

      let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('myCanvas');
      this.selectedShirt.imageDataUrl = canvas.toDataURL();

      this.tshirts = JSON.parse(localStorage.getItem("tshirts"))

      this.tshirts.push(this.selectedShirt)

      localStorage.setItem("tshirts", JSON.stringify(this.tshirts))

      console.log(this.tshirts)

      this.resetForm();
    }

}
