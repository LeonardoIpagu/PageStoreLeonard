import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';

//13: Instalacion de libreria swiper
import Swiper from 'swiper';

@Component({
  selector: 'app-new-items',
  standalone: true,
  imports: [],
  templateUrl: './new-items.component.html',
  styleUrl: './new-items.component.scss',
})

export class NewItemsComponent implements OnInit {
  //4.2
  ngOnInit(): void {
    ScrollReveal().reveal('.new-swiper', {
      origin: 'top',
      distance: '60px',
      duration: 1500,
      delay: 300,
      reset: true,
    });

    //13.1
    const newSwiper = new Swiper('.new-swiper', {
      //Simempre mantiene el elemento seleccionado al centro
      centeredSlides: true,
      loop: true,
      //Permitimos que el elemento a la derecha e izquierda tambien se pueda ver y la condicion es el centro de ese SLIDE tambien se pueda mirar
      slidesPerView: 'auto',
      //Espacio entre ellos
      spaceBetween: 16

      //13.2: Vamos a configurar el SCROLL UP en 'app.component.html'(14)
    })
  }

  
}
