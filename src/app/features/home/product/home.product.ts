import {Component, Input} from '@angular/core';

@Component({
  selector: 'home-product',
  templateUrl: 'home.product.html',
  styleUrls: ['home.product.css'],
})
export class HomeProduct {
  @Input() product! : string;

}
