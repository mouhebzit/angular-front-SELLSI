import { Component } from '@angular/core';
import { last } from 'rxjs';

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
  isFavorite: boolean;
}

export interface ProductImage {
  url: string;
  id: number;
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  name = 'Angular';
  clickedImage = 0;
  clickedStyle = "2px solid black"
  favoriteClass = "";

  produit : Product = {
    id : 1,
    brand: "Hugo Boss",
    description: "L'Elixir de Parfum BOSS Bottled, le plus concentré des parfums de la gamme, est ambré et boisé, il ...",
    unit: [50,100],
    price: [115,145],
    rating: 4.5,
    new: true,
    name: "BOSS Bottled Elixir - Parfum Intense",
    isFavorite: false,
  };

  images : ProductImage[] = [
    {url : "../../../assets/boss2.avif", id : 0},
    {url : "../../../assets/boss.avif", id : 1},
    {url : "../../../assets/boss3.avif", id : 2},
    {url : "../../../assets/boss4.avif", id : 3},
    {url : "../../../assets/boss5.avif", id : 4},
  ];

  myThumbnail = this.images[0].url;

  myFullresImage="../../../assets/boss.avif";


  tiles: Tile[] = [
    {text: 'One', cols: 2, rows: 1, color: 'white'},
    {text: 'Two', cols: 2, rows: 1, color: 'white'},
  ];


  starWidth = 125 * this.produit.rating / 5;

  public onClicked(id : number){
    console.log("image",id);
    this.changerImageDeBase(this.images[id].url);
    this.clickedImage = id;
  }

  showImageZoomComponent: boolean = true;

  changerImageDeBase(nouveauChemin: string) {
    this.myThumbnail = nouveauChemin;
    this.showImageZoomComponent = false; // Cacher le composant
    setTimeout(() => {
      this.showImageZoomComponent = true; // Montrer le composant après un court délai
    }, 0.000000001);
  }

  translate = 0;
  firstSlide = 0;
  lastSlide = this.images.length > 4 ? 3 : this.images.length - 1;


  public translateUp(pixel : number){
    if(this.firstSlide !== 0){
      this.translate += pixel;
      this.firstSlide--;
      this.lastSlide--;
    }
  }

  public translateDown(pixel : number){
    if(this.lastSlide != this.images.length - 1){
      this.translate += pixel;
      this.firstSlide++;
      this.lastSlide++;
    }
  }

  favoriteIcon = this.produit.isFavorite === true ? "favorite_border" : "favorite";

  public toggleFavorite(){
    this.produit.isFavorite = !this.produit.isFavorite;
    this.favoriteIcon = this.produit.isFavorite === true ? "favorite_border" : "favorite";
  }

  currentPrice = 0

  public console(id : number){
    this.currentPrice = id;
  }

  

}

 
