import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AreaUnoComponent } from './area-uno/area-uno.component';
import {RouterModule} from "@angular/router";
import {RUTAS_APP} from "./app.rutas";
import { InicioComponent } from './inicio/inicio.component';
import { IngresarDatosComponent } from './ingresar-datos/ingresar-datos.component';
import { AreaDosComponent } from './area-dos/area-dos.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaUnoComponent,
    InicioComponent,
    IngresarDatosComponent,
    AreaDosComponent
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
export class AppModule { }
