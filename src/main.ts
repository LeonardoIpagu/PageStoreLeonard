import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

//12: importamos a la funcion register desde el paquete 'swiper/element/bundle'
import { register } from 'swiper/element/bundle';
//12.1: Llamamos a la funcion register para registrar elementos personalizados de swiper globalmente
/* Esto asegurará que estén disponibles en toda la aplicacion de angular y por lo tanto
que angular sepa como manejar estos elementos personalizados para integrarlos al ciclo de vida

Vamos a configurar el swiper de los nuevos items en la pagina (new-items.component(13))
*/
register();

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
