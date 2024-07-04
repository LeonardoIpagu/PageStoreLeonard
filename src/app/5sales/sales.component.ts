import { Component, OnInit} from '@angular/core';
import ScrollReveal from 'scrollreveal';
@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss',
})
export class SalesComponent implements OnInit {
  //4
  ngOnInit(): void {
    ScrollReveal().reveal('.trick__content', {
      origin: 'bottom',
      distance: '60px',
      duration: 1500,
      delay: 200,
      reset: true,
      interval: 100,
    });
  }
}
