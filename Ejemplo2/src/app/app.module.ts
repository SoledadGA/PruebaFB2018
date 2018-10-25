import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ColumnaComponent } from './columna/columna.component';
import { TextoComponent } from './texto/texto.component';
import { InicioComponent } from './inicio/inicio.component';
import {RouterModule} from "@angular/router";
import {RUTAS_APP} from "./app.rutas";
import { PruebaComponent } from './prueba/prueba.component';
import { Area1Component } from './area1/area1.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ColumnaComponent,
    TextoComponent,
    InicioComponent,
    PruebaComponent,
    Area1Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(

      RUTAS_APP, {useHash: true}

    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
