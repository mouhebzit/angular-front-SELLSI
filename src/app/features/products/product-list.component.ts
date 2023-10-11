import {Component} from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  filter_button_text = "AFFICHER LES FILTRES"
  filter_button_is_toggled : boolean = false
  categories: string[] = ["EAU DE TOILETTE","EAU DE PARFUM","EAU DE COLOGNE","DEODORANT","GEL DOUCHE ET SAVON","GEL RASAGE ET APRES RASAGE"];
  productList = [
    { image: '../../../assets/product.png', alt: 'Description 1' },
    { image: '../../../assets/product6.png', alt: 'Description 1' },
    { image: '../../../assets/product2.png', alt: 'Description 1' },
    { image: '../../../assets/product3.png', alt: 'Description 1' },
    { image: '../../../assets/product4.png', alt: 'Description 1' },
    { image: '../../../assets/product5.png', alt: 'Description 1' },
    { image: '../../../assets/product6.png', alt: 'Description 1' },
    { image: '../../../assets/product.png', alt: 'Description 1' },
  ];

  changeContainerWidth(){
    this.filter_button_is_toggled = !this.filter_button_is_toggled;
    this.filter_button_text = this.filter_button_is_toggled ? "MASQUER LES FILTRES" : "AFFICHER LES FILTRES";

  }
}
