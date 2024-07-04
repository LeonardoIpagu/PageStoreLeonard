import { Component } from '@angular/core';
//8.3 Importamos directiva RouterLink (header.component.html(8.4))
//8.6 Importacion directiva routerLinkActive (header.component.html(8.7))
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  /* PASO 1: INICIO; controlaremos el evento de click en nuestros ITEMS cuando
  estemos en modo responsive(pequeño)
  
    1.1: Inicializamos una variable vacia(isMenuOpen), mas tarde tendra un valor
  */
  isMenuOpen= "";

  /* 1.2: Escucharemos el evento de click en nuestro HTML (header.html: 1.2.1)
  
    1.3: Creamos a la funcion 'activeHeader()' que se supone invocamos desde HTML
    y le cambiamos el valor a la variable isMenuOpen poniendo el nombre de clase
    que va a activar el menu (show-menu) 
      
  */

  activeHeader(){
    this.isMenuOpen = "show-menu";
    //alert(`El valor de isMenuOpen ahora es: ${this.isMenuOpen}`);
    //1.4: luego otra vez en nuetro HTML le decimos que reciba esa variable(header.html: 1.3.1)
  }
  //1.5: declaramos la funcion closeHader() y recibimos a un evento de click
  closeHeader(event: Event){
    // Verifica si el elemento clickeado es un <a> con la clase 'nav__link'
    /* event.target=tipo de elemento target al que se le hizo click */
    /* as HTMLElement= convertimos esa informacion para trabajar con las propiedades y métodos específicos de los elementos del DOM. */
    const target = event.target as HTMLElement;

    /* Usando el metodo 'matches(lo que encerremos sirve para saber si coincide con un elemento <a class="nav__link">)' del objeto 'target' */
    if (!target.matches('a.nav__link')) {
      this.isMenuOpen = "show-menu";
    }
    
    else{
      this.isMenuOpen = "";
    }

  }
    
    //alert(`El valor de isMenuOpen ahora es ${this.isMenuOpen}`);
  eliminar(){
    this.isMenuOpen = "";
  }

   
}
  /* PASO 2: Configuracion de scrollreveal: nos permite revelar elemenos 
  cuando se escrollea la pagina de una manera sutil; ejemplo ahora
  mismo ve y recarga la pagina y el primer elemento se muestra luego
  luego sin ninguna animación;
  
  
    1: vamos a instalar la libreria en nuestro proyecto:
      npm install scrollreveal

    2: vamos a importarlo en el componente deseado, en este caso tenemos
    multiples componentes, ya seria cuestion de irlo aplicando we go to
    (3(2home-container.component))
  
  
  
  */




/* Paso 5: ROUTING: en este componente tenemos un menu de navegacion el cual
redirecciona a partes de nuestra pagina; 

  >Cuando llamamos a una parte de la page: 
    <a href="#home" class="nav__link active-link">Home</a>

Solo hacemos dicho cambio desde un simple HREF sin embargo en un
proyecto real usar el routing es mas adecuado, aqui tenemos 4 menús:
  >HOME
  >ABOUT
  >CANDY
  >NEW

Por lo tanto al escribir estas URL'S en el navegador, debe mostrar el component
Por ejemplo : 
  >http://localhost:4200/home
  >http://localhost:4200/about
  >http://localhost:4200/candy

5.1: Tengo dos archivos en el folder 'APP':
  >app.config.ts
  >app.routes.ts: en este archivo es donde se configuran las rutas: (6: app.routes.ts)


*/