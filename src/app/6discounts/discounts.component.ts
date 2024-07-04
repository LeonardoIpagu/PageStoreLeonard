import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-discounts',
  standalone: true,
  imports: [],
  templateUrl: './discounts.component.html',
  styleUrl: './discounts.component.scss',
})
export class DiscountsComponent implements OnInit {
  //4.1
  slideUp = {
    origin: 'bottom',
    distance: '60px',
    duration: 1500,
    delay: 200,
    reset: true,
    interval: 300,
  }
  ngOnInit(): void {
    ScrollReveal().reveal('.discount__img', {...this.slideUp, origin:'left'});
    ScrollReveal().reveal('.discount__data', {...this.slideUp, origin: 'right' });
  }
}
