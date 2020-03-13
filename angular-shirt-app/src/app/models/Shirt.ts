//import { read } from 'fs';

export class Shirt {
    size:string;
    color:string;
    word:string;
    form:string;
    def:string;
    quantity:number;
    //the cost is per shirt no matter the quantity
    cost:number;
    imageDataUrl:string;

    constructor(size:string, color:string, word:string, form:string, def:string, quantity:number, imageDataUrl:string) {
        this.size = size;
        this.color = color;
        this.word = word;
        this.form = form;
        this.def = def;
        this.quantity = quantity;
        this.cost = 0;
        this.imageDataUrl = imageDataUrl;
        //in case one wants different costs for different colors, sizes, textlengths, etc
        switch (this.color) {
            case "white": this.cost = 3; break;
            case "black": this.cost = 3; break;
            case "green": this.cost = 3; break;
            case "blue": this.cost = 3; break;
            case "yellow": this.cost = 3; break;
            case "red": this.cost = 3; break;
        }
        switch (this.size) {
            case "XS": this.cost += 30; break;
            case "S": this.cost += 33; break;
            case "M": this.cost += 36; break;
            case "L": this.cost += 39; break;
            case "XL": this.cost += 42; break;
            case "XXL": this.cost += 45; break;
            case "XXXL": this.cost += 48; break;
        }
        console.log(this.cost);
        let textlength = this.word + this.form + this.def
        let characterCost = 0.5;
        this.cost += textlength.length*characterCost;
        console.log(this.cost);
    }

    price() {
        return this.cost*this.quantity;
    }
}
