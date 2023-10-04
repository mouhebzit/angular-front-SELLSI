import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

export interface Product {
  id: number;
  brand: string;
  description: string;
  unit: number[];
  price: number[];
  rating: number;
  new: boolean;
  name: string;
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  name = 'Angular';

  myThumbnail = "../../../assets/boss.avif";

  myFullresImage="../../../assets/boss.avif";


  tiles: Tile[] = [
    {text: 'One', cols: 2, rows: 1, color: 'white'},
    {text: 'Two', cols: 2, rows: 1, color: 'white'},
  ];

  produit : Product = {
    id : 1,
    brand: "Hugo Boss",
    description: "L'Elixir de Parfum BOSS Bottled, le plus concentré des parfums de la gamme, est ambré et boisé, il ...",
    unit: [50,100],
    price: [115,145],
    rating: 4.5,
    new: true,
    name: "BOSS Bottled Elixir - Parfum Intense"
  }

  black = "black";

  starWidth = 125 * this.produit.rating / 5;
}
