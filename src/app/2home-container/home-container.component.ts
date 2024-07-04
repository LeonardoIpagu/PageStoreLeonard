 /* 3.6.1: a lado de 'component' ponemos a: OnInit */
import { Component, OnInit } from '@angular/core';

 /* 3.1 IMPORTACION DE LIBRERIA*/
import * as ScrollReveal from 'scrollreveal';
import { CategoriesComponent } from '../3categories/categories.component';
import { AboutComponent } from '../4about/about.component';
import { SalesComponent } from '../5sales/sales.component';
import { DiscountsComponent } from '../6discounts/discounts.component';
import { NewItemsComponent } from '../7new-items/new-items.component';
import { NewsletterComponent } from '../8newsletter/newsletter.component';
import { FooterComponent } from '../9footer/footer.component';

/* 10.2: Importamos libreria de swipper bundle: 
  >instalamos con npm: $ npm install swiper 
  >importamos libreria en el componente (10.3)  
*/
//10.3
import Swiper from 'swiper';

//10.6: vamos a implementarlo en el componente (10.6)  

@Component({
   selector: 'app-home-container',
   standalone: true,
   imports: [CategoriesComponent, AboutComponent, SalesComponent, DiscountsComponent, NewItemsComponent, NewsletterComponent, FooterComponent],
   templateUrl: './home-container.component.html',
   styleUrl: './home-container.component.scss',
})
 
 //3.7.1: implementar OnInit
export class HomeContainerComponent implements OnInit{
   
  //3: Importacion de Libreria 'ScrollReveal' (3.1): si sale error instalamos: >'npm install scrollreveal --save' >-----> si da otro error: '@types/scrollreveal'

  //3.2: 'import * as ScrollReveal from 'scrollreveal' importa un objeto(ScrollReveal) que contiene funcionalides de la libreria; entonces hay que crear una instancia de ese objeto para luego llamar sus metodos
  sr = ScrollReveal;

  //3.3: 'slideUp' es un array que almacena configuraciones que se aplicaran al item a revelar
  slideUp = {
    origin: "top",
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
  }

  /* 
  3.4: 'sr' es un objeto que contiene info de la libreria scrollreveal, que es una funcion constructora que
  devuelve una instancia de scrollreveal, para usarla:
    >1: invocamos a la funcion ScrollReveal()
    >2: indico usar el metodo 'reveal' y especifico que item html sera a revelar
    >3: indico cuales son sus caracteristicas

  3.5: 'sr' como tal NO es identificada como funcion en typescript (This expression is not callable) ya que al
  ser un objeto 'instancia' de la libreria no se reconoce como una funcion que se pueda invocar, por lo tanto
  debemos buscar la manera de que se invoque asi misma

  3.6: CICLO DE VIDA DE ANGULAR: ngOnInit
    >se invoca una vez que Angular ha inicializado los datos relacionados con el componente(propiedades de entrada
      vinculadas y directivas del componente) y se usa para realizar cualquier inicialización necesaria dentro del
      componente

    >3.6.1: Importamos su libreria en el componente
    >3.6.2: Envolvemos a nuestra funcion ScrollReveal para que se ejecute cuando se cargue todo el componente

  */
  ngOnInit(): void {

    //3.7: No funciona scrollreveal: TypeScript espera de SCROLLREVEAL un objeto que tiene una propiedad default ya que al ser un objeto que almacena informacion y metodos espera encontrar esa propiedad default(reveal) por lo tanto debemos indicar que 'sr.default().reveal()'
    //quiero usar el método reveal() que se encuentra en la propiedad default del objeto ScrollReveal”.
    this.sr.default().reveal('.home-swiper', this.slideUp);   
    //3.8. Lo mismo para los demas componentes en cuando a 'scrollreveal(3.9, 4, 4.1, 4.2, 4.3, 4.4 )'

    //5: Componente 'header'(PASO: 5)

    /* 10.4: Implementamos swiper pagination */
    const homeSwiper = new Swiper(".home-swiper", {
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        //type: 'bullets',
        clickable: true,
        type: 'progressbar'
      },
    });

    /* 10.5: se supone que para que se rendericen correctamente los estilos de swiper, como se
    usa una libreria en este caso swiper, tenemos que decirle a nuestros estilos que se importen
    los estilos de 'swiper' para que estos puedan reenderizarce correctamente para ello tenemos
    que ir al archivo que contiene los estilos globales e indicarle que importe estilos desde
    node modules (es la carpeta donde se instala la libreria de swiper y sus estilos) para ello
    vamos a la carpeta raiz y en 'styles.scss'(10.6) 
    
    11: asi hasta ahora funcionara el swiper wraper y sus slides bien, pero el swiper pagination
    no jala:
    Cuando se instala swiper desde NPM se incorpora la funcionalidad al proyecto, sin embargo
    ANGULAR tiene una manera muy particular de gestionar modulos y dependencias, en nuestro
    proyecto tenemos un archivo llamado MAIN.TS el cual esta encargado de cargar todo el proyecto
    inicialmente ya que es para configuraciones globales: 

    La clave es usar 'register()' para registrar los elementos personalizados de swiper 
    globalmente para ello vamos a main.ts(12)     
    */

    
  }    

}

 
