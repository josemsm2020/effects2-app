import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://reqres.in/api';

  constructor( private http: HttpClient) { }

  getUsers(){
    // con esta línea aparte de la lista de usuarios me devuelve más datos de información
    //return this.http.get(`${ this.url }/users?per_page=6`); 
    //Si escribo las siguientes líneas me devuelve la lista de usuarios 
      return this.http.get(`${ this.url }/users?per_page=6&delay=4`)
      .pipe(
        map( (resp: any) => {
          return resp ['data'];
        })                
      );
  }

  getUserById( id: string ){    
      return this.http.get(`${ this.url }/users/${ id }`)
      .pipe(
        map( (resp: any) => {
          return resp ['data'];
        })                
      );
  }
}
