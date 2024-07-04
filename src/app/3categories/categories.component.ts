import { Component, OnInit } from '@angular/core';
import { AboutComponent } from '../4about/about.component';
import *as ScrollReveal from 'scrollreveal';
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [AboutComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit {
  //3.9
  sr = ScrollReveal;
  slideUp = {
    origin: 'bottom',
    distance: '60px',
    duration: 1500,
    delay: 200,
    reset: true,
    interval: 300,
  };

  ngOnInit(): void {
    this.sr.default().reveal('.category__data', this.slideUp);

    /* Para el nuevo item 'about__data' quiero usar las mismas propiedades de 'slideUp' solo
    que unicamente quiero es sobreescribir la propiedad interna 'origin' con 'left'; para no
    hacer un nuevo objeto con mismas caracteristicas y sea mas codigo;
    
      >creare UN NUEVO OBJETO QUE HEREDE TODAS LAS PROPIEDADES DE 'slideUp'     
      >{ ...this.slideUp } significa "copiar todas las propiedades de this.slideUp en un nuevo objeto"
      >{origin: 'left' } agrega o sobrescribe la propiedad origin en este nuevo objeto con el valor 'left'
    
    A esto se le llama propagacion de objetos, es decir se crea un nuevo objeto 
    literal que se pasa como segundo argumento a la función reveal()
    */
    this.sr.default().reveal('.about__data', {...this.slideUp, origin: 'left'});
    this.sr.default().reveal('.about__img', {...this.slideUp, origin: 'right'})

  }
}
