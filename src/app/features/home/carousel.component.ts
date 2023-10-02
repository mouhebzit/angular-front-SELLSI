import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  slides = [
    { image: '../../../assets/product.png', alt: 'Description 1' },
    { image: '../../../assets/product6.png', alt: 'Description 1' },
    { image: '../../../assets/product2.png', alt: 'Description 1' },
    { image: '../../../assets/product3.png', alt: 'Description 1' },
    { image: '../../../assets/product4.png', alt: 'Description 1' },
    { image: '../../../assets/product5.png', alt: 'Description 1' },
    { image: '../../../assets/product6.png', alt: 'Description 1' },
    { image: '../../../assets/product.png', alt: 'Description 1' },


    // ... add more slides as needed
  ];

  currentSlide = 0;
  slideWidth = 1500; // This should match the width defined in the CSS

  previousSlide() {
    this.currentSlide = Math.max(this.currentSlide - 1, 0);
    console.log("left")
  }

  nextSlide() {
    // Adjust for the fact that 4 slides are shown at once.
    this.currentSlide = Math.min(this.currentSlide + 1, Math.ceil(this.slides.length / 4) - 1);
    console.log("right")
  }

  get offset(): string {
    return -(this.currentSlide * this.slideWidth) + 'px';
  }
}
