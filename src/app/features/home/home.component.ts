import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});
  ngOnInit(): void {
    this.slides[0] = {
      src: '../../../assets/slide1.jpg',
    };
    this.slides[1] = {
      src: '../../../assets/slide2.jpg',
    }
    this.slides[2] = {
      src: '../../../assets/slide3.jpg',
    }
  }

}
