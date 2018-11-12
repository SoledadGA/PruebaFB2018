import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AreaUnoComponent } from './area-uno/area-uno.component';
import {RouterModule} from "@angular/router";
import {RUTAS_APP} from "./app.rutas";
import { InicioComponent } from './inicio/inicio.component';
import { IngresarDatosComponent } from './ingresar-datos/ingresar-datos.component';
import { AreaDosComponent } from './area-dos/area-dos.component';
import { AreaTresEspacialComponent } from './area-tres-espacial/area-tres-espacial.component';
import { AreaTresTemporalComponent } from './area-tres-temporal/area-tres-temporal.component';
import { AreaCuatroComponent } from './area-cuatro/area-cuatro.component';
import { AreaCincoComponent } from './area-cinco/area-cinco.component';
import { AreaSeisComponent } from './area-seis/area-seis.component';
import { AreaSieteComponent } from './area-siete/area-siete.component';
import { AreaOchoComponent } from './area-ocho/area-ocho.component';
import { AreaOnceComponent } from './area-once/area-once.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaUnoComponent,
    InicioComponent,
    IngresarDatosComponent,
    AreaDosComponent,
    AreaTresEspacialComponent,
    AreaTresTemporalComponent,
    AreaCuatroComponent,
    AreaCincoComponent,
    AreaSeisComponent,
    AreaSieteComponent,
    AreaOchoComponent,
    AreaOnceComponent
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