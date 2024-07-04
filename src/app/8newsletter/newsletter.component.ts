import { Component, OnInit } from '@angular/core';
import * as scrollreveal from 'scrollreveal';
@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss',
})
export class NewsletterComponent implements OnInit {
  //4.3
  slideUp = {
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true,
  };

  ngOnInit(): void {
    ScrollReveal().reveal('.newsletter__container', this.slideUp);
  }
}
