import {Component, EventEmitter, Output} from '@angular/core';
import {SubmenuProduct} from "../item/submenu.product";

export interface ColumnGrid {
  cols: number;
  rows: number;
  name : string
  links: SubmenuProduct[] | string[];
  products : SubmenuProduct[]

}
@Component({
  selector: 'parfumes-menu',
  templateUrl: './parfumes.component.html',
  styleUrls: ['../submenu.components.css'],
})
export class ParfumesComponent {
  @Output() closeMenuEvent: EventEmitter<void> = new EventEmitter<void>();
  products = [SubmenuProduct, SubmenuProduct]
  parfumesCat = ['Parfums Femme', 'Parfums Homme', 'Parfums Unisexes','Parfums enfant','Coffret de parfums','Parfums parapharmacie']
  parfumesType = ['Eau de parfum', 'Eau de toilette', 'Body Spray','Parfums boisés','Parfums frais','Parfums rechargeables']
  topBrands = ['Paco Rabanne', 'Dior', 'Givenchy','Lancome','Dolce & Gabbana','Hugo Boss','Calvin Klein','Narciso Rodriguez','Jean Paul Gaultier']

  columns: ColumnGrid[] = [
    {cols: 1, rows: 1, name : 'CATEGORIES DE PARFUMS',links: this.parfumesCat, products:[]},
    {cols: 1, rows: 1, name : '',links: this.parfumesType,products:[]},
    {cols: 1, rows: 1, name : 'TOP MARQUES',links: this.topBrands, products:[]},
    {cols: 3, rows: 1, name : 'TOP VENTES',links:[], products:this.products},
  ];

  close(){
    this.closeMenuEvent.emit()
    console.log("close")
  }

}
