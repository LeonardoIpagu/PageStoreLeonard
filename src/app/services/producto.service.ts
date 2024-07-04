import { Injectable } from '@angular/core';

//1: Importamos a mi documento para trabajar con el:
import { apiServer } from '../apiServer';

//4: Importamos a HTTP Client, para poder usarlo
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  
  //2: Necesito traer algo privado donde almacenar lo de mi archivo 'apiServer.ts'
  //3: Es igual a mi constante 'apiServer' Y llamar a 'serverUrl'; con eso jalo todo lo quue venga en su URL (JSON)
  private ApiUrl: string = apiServer.serverUrl;
  
  //5: Importamos el servicio HTML Client
  constructor(private http : HttpClient) { }

  //6: Creamos funcion que trae:
  getProducto (){
    /* Retornamos de http y vamos a obtener(.get) 
    >Lo que me interesa es obtener mis objetos(productos.json) asi que estare esperando lo que viene
    a travez de mi 'ApiUrl' por lo tanto dentro del get va mi ApiUrl
    */
    return this.http.get(`${this.ApiUrl}`);
  }
}
