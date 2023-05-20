import { Usuario } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
//import { UsuarioService } from '../../services/usuario.service';
import { AppState } from 'src/app/store/app.reducers';
import { Store } from '@ngrx/store';
import { cargarUsuarios } from 'src/app/store/actions/usuarios.actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  usuarios: Usuario [] = [];
  loading: boolean = false;
  error: any;

  //constructor( public usuarioService: UsuarioService ){}
  constructor( private store: Store<AppState>){}

  ngOnInit(): void {

    this.store.select('usuarios').subscribe( ( {users, loading, error}) => {
      this.usuarios = users;   
      this.loading =  loading;
      this.error = error;
    });

    this.store.dispatch( cargarUsuarios() );
    // this.usuarioService.getUsers()
    //     .subscribe(                     
    //       users => {
    //       console.log(users);
    //       this.usuarios = users;
    //     });    
  }

}
