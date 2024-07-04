/* Routing: es un sistema que permite la navegacion en una aplicacion web: rutas internas */

//6.1: importamos Routes y RouterModule de '@angular/router': para definir ours routing
import { Routes } from '@angular/router';
import { HomeContainerComponent } from './2home-container/home-container.component';
import { AboutComponent } from './4about/about.component';
import { SalesComponent } from './5sales/sales.component';
import { NewItemsComponent } from './7new-items/new-items.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


/* 6.2: creamos una const llamada routes; especificamos que es de tipo 'Routes
(alias que hemos importado hace rato)' y ademas que se trata de un array
*/
export const routes: Routes = [
/*
6.3 Por cada ruta que queramos crear (es la forma en la que entraremos a nuestra
aplicacion y pedir que cargue algun componente(home, about, trick, new)) voy 
a incluir un objeto (total de 4);

    >Por cada ruta: tenemos un patch diferente:
        *http://localhost:4200/HOME
        *http://localhost:4200/ABOUT
        *http://localhost:4200/CANDY
        *http://localhost:4200/NEW
*/
    //1er Path(ruta)
    
    {path: 'home', component: HomeContainerComponent},
    {path: 'about', component: AboutComponent},
    {path: 'sales', component: SalesComponent},
    {path: 'new', component: NewItemsComponent},


    //9: ruta alternativa: 
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    /* 9.1: ruta alternativa por si una pagina no existe 404: Cualquier ruta que no coincida con
    una ruta existente en su configuración utilizará esta ruta; se supone que tambien debemos crear
    su componente para que pueda cargar dicha ruta (page-not-found/page-not-found.component(9.2))*/
    {path: '**', component: PageNotFoundComponent}

];

/* 6.4: vamos 'app.config.ts'(7) */