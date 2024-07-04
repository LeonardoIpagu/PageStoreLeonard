import { ApplicationConfig } from '@angular/core';

//7: importamos la funcion provideRouter
import { provideRouter } from '@angular/router';
//7.1: importamos routes(contiene el array con los patch) del archivo 'app.routes'
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  //7.2: Declaramos a 'providers' como tipo array-matriz
  providers: [
    //7.3: Podemos inyectar una función 'provideRouter' pasando como argumento a 'routes' y de esta manera ya esta configurado
    provideRouter(routes)
    //7.4: En este punto no hace nada, por que se ha configurado la directiva encargada de renderizar dichos componentes
    //7.5: Vamos a app/app.component.ts(8)
  ],
  
};
