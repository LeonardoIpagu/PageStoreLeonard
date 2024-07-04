import { Component } from '@angular/core';
//8: Importamos router outlet y tambien en el componente. Vamos al HTML del componente(8.1)
//15.2: importamos a router (15.3)
import { RouterLink, RouterOutlet, Router } from '@angular/router';

import { HeaderComponent } from './1header/header.component';
import { HomeContainerComponent } from './2home-container/home-container.component';

//14: Importacion de Host Listener
import { HostListener } from '@angular/core';
import { every, fromEvent, throttleTime } from 'rxjs';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeContainerComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Proyects-Java-Script';

  //14 Configuracion de scrollUp:
  scrollup = '';

  /* 14.1 Declaramos el decorador 'HostListener' que se usa para escuchar eventos del DOM:
      >1er argumento: nombre del evento del DOM 'window:scroll': evento de desplazamiento scroll del objeto global window
      >2do argumento: el evento del DOM '[$event]' : evento del dom que ha sido disparado o evento de dezplazamiento scroll

      >Manejador del evento 'onScroll' es la funcion que se ejecuta cada que se dispara el 1er argumento
      es decir cada que 'window:scroll' se dispara, su manejador 'onScroll' le llega como argumento el
      '[$event]' y en base a eso se ejecuta
  */

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    //Obtenemos posicion actual de scroll
    const scrollrecorrido = window.scrollY;
    if (scrollrecorrido >= 460) {
      this.scrollup = 'show-scroll';
      //alert(`Se ha recorrido ${scrollrecorrido}`);
    } else {
      this.scrollup = '';
    }
  }

  //14.2: con interpolacion en nuestro HTML pasamos la nueva clase app.compo.html(14.3)
  /* 15: funciona super chido, ahora el pedo es que como todo lo organizamos con routing cuando
  doy click en el BOTON DE 'SCROLLUP' como tiene un HREF='#' sobre entiende que el url debe ser
  asi: http://localhost:4200/# y en nuestro routing hemos dicho que cualquier ruta alternativa

  redireccione a 'HOME' entonces todo el componente home se carga por lo tanto el cambio es muy
  brusco ya que se carga todo el componente y no se dezliza suavemente hasta el inicio, esto lo
  podemos reparar de la siguiente manera:
  
  Debido a la estructura de enrutamiento de esta aplicacion tenemos que manejar correctamente 
  la logica, usare el ENRUTADOR de angular para navegar al componente principal 'home' donde se
  encuentra el elemento con el ID 'home' <section class="home container" id="home">

  15.1: Importamos el modulo 'router' para interactuar con el modulo ROUTER de Angular y este 
  a su vez interactuar con el enrutador de la aplicacion y realizar navegaciones prográmaticas(15.2)
  
  15.3: Creamos un constructor en la clase del componente para que permita inyectar el 
  servicio de ROUTER y pueda usar sus metodos y propiedades en esta clase: 
  */
  constructor(private router: Router) {

    //20: investigar la diferencia


    /* El 'constructor' es un metodo especial de la clase que se ejecuta cuando se crea
    una instancia de la clase(se inicializan porpiedades, configuran servicios, etc...)
    
    >fromEvent(RxJS): funcion que convierte eventos del DOM en observables recibe un 
    un elemento del DOM ('WINDOW') y el nombre del evento('SCROLL') como parametros y
    devuelve un observable que emite eventos de dezplazamiento(scroll) del obj 'window'

    >pipe(throttleTime(100)): es un metodo de los observables de RxJS que permite encadenar
    operadores para manipular los datos que emite el observable: throttletime(100) es para
    limitar la frecuencia de emision de eventos a un maximo de uno por cada 100 milisegundos
    
    >suscribe: es un metodo de los observables de RxJS utilizado para suscribirse a los 
    eventos emitodos por el observable el cual toma una funcion de devolución de llamada
    como argumento: '(event)=>this.onWindowScroll(event)'

    quiero que mi funcion acepte un parametro llamado 'event' que sera el objeto del evento
    que se genera cuando ocurre el desplazamiento 

    entonces cuando me suscribo a un observable comiezo a escuchar esos eventos, y la funcion
    de llamada se invoca cada que se recibe ese 'event' y luego se lo pasa a la funcion
    onWindowScroll para que haga su magia
    
    */
    fromEvent(window, 'scroll')
    .pipe(throttleTime(100))
    .subscribe((event)=>this.onWindowScroll(event))
  }

  /* 15.4: Cada que yo le de click al elemento de scrollup de HTML voy a invocar a una funcion
  que se llamara scrollToUp(app.component.html(15.5)) */
  //15.6: creacion de funcion
  scrollToUp() {
    /* 15.7: Del servicio de router, usamos su metodo 'navigate' del enrutador e indicandole
    dentro de sus parentesis (['/']) le decimos que iremos a la raiz de la aplicacion
    
    En angular la raiz de la aplicacion o la ruta principal se define en el archivo de enrrutamiento
    de la aplicación y esta ruta se elige como punto de entrada inicial cuando la aplicacion 
    carga por primera vez:
      >{ path: 'home', component: HomeComponent },
      >{path: '', redirectTo: '/home', pathMatch: 'full'}

    Es decir, si la aplicacion al cargarse con la URL: http://localhost:4200 esta al estar vacia
    dice: OK esta vacia la ruta, busco el path que indica a donde ir si la ruta esta vacía:
      >{path: '', redirectTo: '/home', pathMatch: 'full'}
    
    Voy a navegar a dicha ruta que me dice que navegue al componente 'HOME':
    
    Despues esta funcion de 'navigate' retorna una promesa, por lo que se usa 'then()' para 
    ejecutar el codigo deseado:
    Esta promesa en si, retorna un objeto el cual contiene dos posibles estados: 
      >resuelta(fulfilled) 
      >rechazada (rejected)
      
    Si es completada exitosamente podemos encadenar el metodo .then()
    Si es completada de manera erronea puedo encadenar el metodo catch para manejar errores de manera controlada
    */

    this.router
      .navigate(['/'])
      .then(() => {
        /* 15.8: okay ya estamos en el componente 'HOME' pues declaramos un objeto el cual va a 
      almacenar la consulta de buscar en todo el documento HTML del componente 'HOME' aquella
      etiqueta/elemento que tenga el ID 'HOME' */
        const element = document.getElementById('home');

        /* Comprovamos si la variable 'element' es verdadera (si tiene un valor) ya que 'element'
      es el resultado de buscar un elemento en el DOM con ID=HOME 
      Si si tiene valor(no es nulo)
      */
        if (element) {
          /* LLamamos al metodo scrollIntoView en el elemento encontrado ('id: home'
        (<section class="home container" id="home">))
        Este metodo permite desplazar la ventana del navegador para que el elemento sea visible 
        en pantallase : desplaza el contenedor o ancestro del elemento (es decir 'home' es el
        contenedor ancestro) de manera que el elemento en el que se llama a scrollIntoView('home)
        el navegador ajuste el desplazamiento (como home esta hasta arriba el navegador se desplaza
        hacia arriba) para que el elemento a dezplazar sea visible y behavios smoth es para suavidad
        */
          element.scrollIntoView({ behavior: 'smooth' });
        }
      })

      //18.9 encadeno un metodo catch por si la promesa resulta en un fallo en la navegacion
      .catch((error) => {
        console.log('Hubo un error de navegacion:', error);
        alert('la consulta no fue exitosa');

        /* Podemos agregar opciones de navegacion, por ejemplo dirigirlo a otra pagina personalizada
      donde proporcionar mas detalles del error y opciones para continuar: */
        this.router.navigate(['/page_error']);

        /* Registrar el error para analizarlo mas tarde y resolver el problema */
        //this.errorLogginService.logError(error);
      });
  }

  /* 19: Finalmente la pagina funciona, sin embargo solo falta que el HEADER funcione de tal manera
que cuando naveguemos y scrolleamos valla detectando el componente que se encuentre en viewport y
de esa manera indicar en que link del HEADER nos encontramos:
  >Home,
  >About,
  >Candy,
  >New

A este tipo de funcionalidad se le llama SCROLL SPY: actualiza automaticamente los enlaces de
navegacion (en este caso 'Home, About, Candy y New') en funcion de la posición de desplazamiento
de la pagina (es decir si alguno de los componentes entra al viewport)

Por lo tanto, toda la logica para llevar a cabo esta funcionalidad la hare en el componente donde
estamos cargando a los demas componentes (aqui)

19.1: Usaremos a HOST LISTENER para escuchar eventos de la ventana
  >Asegurarse de haber importado esta funcionalidad
  >Para este momento ya es mas facil porque he aplicado esta funcion para mostrar la flecha de 
  scroll up, por lo tanto nos desplazamos a la funcionalidad @HostListener(19.2) 
  */

  /* 19.2:  */
  //@HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    /*19.3 Obtengo la posicion actual de scroll :
      >window.scrollY: es compatible con la mayoria de navegadores modernos: Devuelve la 
      cantidad de píxeles que la ventana se ha desplazado verticalmente desde la parte 
      superior de la página 

      >document.documentElement.scrollTop: para navegadores mas antiguos ya que es la forma
      de obtener la misma info: 'document.documentElement: se refiere al elemento raiz(<html>)
      y 'scrollTop: devuelve la cantidad de dezplazamiento vertical
      
      Es decir con el operando || nos aseguramos de que haya compatibilidad universal

    */
    console.log('scrolling', event)
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;
    scrollPosition = scrollPosition + 100;

    /* 19.4 Necesito mapear todas y C/U de las secciones para saber cuantas secciones hay en el proyecto
    por lo tanto como dicha variable la voy a iterar para ir comparando c/u de las secciones debo
    ser especifico que tipo de datos almacenara este objeto, como se supone estoy mapando elementos
    de tipo HTML
      >Indico que la variable es del tipo que almacena una 'HTMLCollection(coleccion de HTML)'
      La cual contiene elementos HTML(HTMLElement)
    */
    const secciones: HTMLCollectionOf<HTMLElement> = document.getElementsByTagName('section');

    /* 19.5 Como es una coleccion de elementos HTML no se puede iterar, por lo que tiene que ser 
    convertida con el metodo 'array.from'*/
    const seccionesArrayIterable = Array.from(secciones);

    /* (MAS FACIL PODRIA SER): -------------------------------------------------------
    
    Basicamente le estoy diciendo que en el forEach creé una variable llamada 'section' que
    va a ser de tipo 'htmlelement' (es como :  let section : HTMLElement)

    seccionesArrayIterable.forEach((section: HTMLElement) => {
      if(
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ){
        console.log(section.id)
      }
    })
    --------------------------------------------------------------------------------*/
  
    for(let i = 0; i<seccionesArrayIterable.length; i++){
      const section = seccionesArrayIterable[i];


      /* 
        >offsetTop: es la distancia en píxeles desde el borde superior 
        del elemento hasta el borde superior del elemento padre más cercano 

        >offsetHeight: retorna la altura total del elemento

        Cada que iteramos el array, va comparando seccion por seccion:
        
        Basicamente tenemos:      
        <section class='uno'>     su offsetTop: 0   su offsetHeight: 10
        <section class='dos'>     su offsetTop: 10  su offsetHeight: 10
        <section class='tres'>    su offsetTop: 20  su offsetHeight: 10
      
          *section.offsetTop <= scrollPosition:
        Verifica si el desplazamiento vertical 'scrollposition' es <= que la posicion
        vertical superior del borde superior del elemento seccion(si esta visible en la
        parte superior de la ventana del navegador)

          *section.offsetTop + section.offsetHeight > scrollPosition:
        La suma de la posición vertical superior del borde superior del elemento section
        y su altura total del mismo es mayor que la posicion de dezplazamiento de la page
        (se asegura de que el elemento section aun este visible en la parte inferior de
          la ventana del navegador) todo esto basandose siempre en el viewport 

      */

      if(
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ){
        
        //Si ambas condiciones se cumplen imprimimos la seccion (la que se encuentra visible)
        console.log(section.id)

        //Escuchamos ahora a los nav para que podamos comunicarnos con ellos:
        const navLinks: any =  document.querySelectorAll('.nav a.nav__link');
        //console.log(navLinks)
        
        //Queremos que cuando la seccion actual este visible nuestro nav__link se agrege el stilo
        /*Para ello debemos acceder a cada uno de los elementos que vienen en 'navLinks mediante 
        un ciclo, usare forEach: pero necesito decir que cada que itere sobre un elemento, dicho
        elemento (item) sea de tipo 'HTMLAnchorElement' para poder acceder a sus metodos especificos
        como : 'href, target, etc' */
        navLinks.forEach((item: HTMLAnchorElement) =>{


          /* 
          >item.href: se refiere al atributo 'href' del elemento (URL que apunta al enlace)
              ==> <a routerLink="/home">

          >.includes(section.id): 
            *includes(): es el metodo de las cadenas de JS se usa para determinar si una cadena
            de texto contiene otra cadena como subcadena; es útil cuando necesitas verificar si 
            una parte específica de texto está presente dentro de otra cadena de texto más grande


          Entonces verifica si <a routerLink="/home"> contiene el ID de la seccion actual(section.id)
          Si lo contiene entonces el enlace esta vinculado a la seccion actualmente visible
          */
          if (item.href.includes(section.id)) {
            item.classList.add('active-link')
          } else {
            item.classList.remove('active-link')
          }
        })        


      }
    }

    /* 19.6: Vamos a crear un constructor de clase (20) */
  }

  
 
}
