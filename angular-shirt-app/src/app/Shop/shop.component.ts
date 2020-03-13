import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Shirt } from '../models/Shirt'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class Shop implements AfterViewInit {

  shirtColor:     string;
  textColor:      string;
  size:           string;
  quantity:       number;
  term:           string;
  partOfSpeech:   string;
  definitionText: string;

  constructor(){
    this.resetForm();
  }

  /**
    * Draws the text on the canvas with word wrapping
    */
  drawText(canvas: any, text: string) {
    let context = canvas.getContext('2d');
    var maxWidth = canvas.width * 0.3;
    var lineHeight = 26;
    var x = 20 + (canvas.width - maxWidth) / 2; //almost center the text
    var y = 240;

    context.font = '24pt Calibri';
    context.fillStyle = this.textColor;

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

  /**
    * Calculates some coordinates and measures, and (re)draws the shirt and
    * text on the canvas
    */
  drawShirt(color: string, text: string) {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('myCanvas');
    let context = canvas.getContext("2d");
    let parent = canvas.parentElement;

    canvas.style.width = parent.offsetWidth + "px";
    canvas.style.height = ((1000 / 911) * parent.offsetWidth) + "px";

    var img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
      this.drawText(canvas, text);
    };
    img.src = `../../assets/t-shirt-pictures/${color}_shirt.jpg`;
  }

  /**
    * Simple function to call is the shirt canvas needs to be updated
    */
  updateShirt() {
    if(this.term == null) {
      this.drawShirt(this.shirtColor, "");
    } else {
      this.drawShirt(this.shirtColor, `${this.term} (${this.partOfSpeech}): ${this.definitionText}`);
    }
  }

  /**
    * Initializes the canvas with the default values
    */
  ngAfterViewInit() {
    this.updateShirt();
  }

  /**
    * Updates the form and the shirt canvas when a definition has been
    * received from the wiktionary search component
    */
  receiveMessage(event) {
    this.term = event.term;
    this.partOfSpeech = event.partOfSpeech;
    this.definitionText = event.text;

    this.updateShirt();
  }

  onChangeShirtColor(event: any) {
    this.updateShirt();
  }

  onChangeTextColor(event: any) {
    this.updateShirt();
  }

  resetForm() {
    this.shirtColor = "white";
    this.size = "M";
    this.quantity = 1;
    this.textColor = "#000";
  }

  onSubmitForm() {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('myCanvas');

    let tshirts = JSON.parse(localStorage.getItem("tshirts"))

    tshirts.push(
      new Shirt(
        this.size,
        this.shirtColor,
        this.textColor,
        this.term,
        this.partOfSpeech,
        this.definitionText,
        this.quantity,
        canvas.toDataURL()
      )
    );

    localStorage.setItem("tshirts", JSON.stringify(tshirts))

    this.resetForm();
    this.updateShirt();
  }
}
