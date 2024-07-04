//9.2 creacion de componente todo listo YAA!

/* 9.3: Configuracion de SWIPER BUNDLE: vamos a trabajar sobre el componente 'HomeContainer' 
ya que ahi es donde se encuentra nuestra seccion de homeswiper
(home-container/home-container.component.html(10)) */
import { Component, OnInit } from '@angular/core';

import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  template: `
    <div class="not-found">
      <h1>404 ERROR</h1>
      <h2>Page Not Found</h2>
      <p>We couldn't find that page! Not even with x-ray vision.</p>
    </div>
  `,

  styles: [
    `
      .not-found {
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        max-width: 100vw;
        max-height: 100vh;
        padding: 300px;
      }
    `,
  ],
})
export class PageNotFoundComponent implements OnInit {
  //3: Obtencion de los datos
  productos: any[] = [];
  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.getProducto().subscribe(
      (data: any) => {
        this.productos = data; // Asignar los datos obtenidos del servicio al array de productos
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }
}

/* 
¡Entendido! Si estás buscando información específica sobre cómo trabajar con servicios en Angular, y en particular sobre cómo utilizar HttpClient para realizar solicitudes HTTP y obtener datos en tus componentes, te recomendaría buscar recursos que cubran los siguientes temas:

Angular Services: Busca información sobre cómo crear, inyectar y utilizar servicios en Angular. Esto incluiría cómo definir un servicio, cómo inyectarlo en tus componentes y cómo usarlo para compartir datos y lógica entre diferentes partes de tu aplicación.

Angular HttpClient: Encuentra recursos que expliquen cómo utilizar HttpClient en Angular para realizar solicitudes HTTP. Esto incluiría cómo importar y configurar HttpClientModule en tu aplicación, cómo hacer solicitudes GET, POST, PUT, DELETE, etc., y cómo manejar las respuestas y los errores.

Tipado en TypeScript: Busca información sobre cómo trabajar con tipos en TypeScript y cómo esto se relaciona con Angular y HttpClient. Esto podría incluir cómo definir interfaces para tus datos, cómo especificar tipos en tus funciones y cómo lidiar con problemas de inferencia de tipos en TypeScript.

Ciclo de vida del componente en Angular: Asegúrate de entender cómo funcionan los ganchos del ciclo de vida del componente en Angular, como ngOnInit(), ngOnDestroy(), etc. Estos son importantes para realizar tareas de inicialización y limpieza en tus componentes.
*/
