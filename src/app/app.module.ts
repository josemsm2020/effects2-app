import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Módulos exportados
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { appReducers } from './store/app.reducers';
import { EffectsArray } from './store/effects/index';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    UsuariosModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(EffectsArray),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      features: { //Este parámetro es nuevo de la versión 16 de "@ngrx/store-devtools": "^16.0.0"
        pause: false, // start/pause recording of dispatched actions
        lock: true, // lock/unlock dispatching actions and side effects
        persist: true // persist states on page reloading
      }
    })         
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
