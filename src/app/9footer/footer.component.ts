import { Component, OnInit } from '@angular/core';
import * as ScrollReveal from 'scrollreveal';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  //4.4
  sr = ScrollReveal;
  slideUp = {
    origin: 'bottom',
    distance: '60px',
    duration: 1500,
    delay: 200,
    reset: true,
    interval: 100
  };
  ngOnInit(): void {
    this.sr.default().reveal('.footer__content', this.slideUp)
  }
}
