import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ChartModule} from 'primeng/chart';
import {
  MatCheckboxModule,
  MatButtonModule,
  MatFormFieldModule,
} from '@angular/material';

import {AppComponent} from './app.component';
import {AreaUnoComponent} from './area-uno/area-uno.component';
import {RouterModule} from '@angular/router';
import {RUTAS_APP} from './app.rutas';
import {InicioComponent} from './inicio/inicio.component';
import {IngresarDatosComponent} from './ingresar-datos/ingresar-datos.component';
import {AreaDosComponent} from './area-dos/area-dos.component';
import {AreaTresEspacialComponent} from './area-tres-espacial/area-tres-espacial.component';
import {AreaTresTemporalComponent} from './area-tres-temporal/area-tres-temporal.component';
import {AreaCuatroComponent} from './area-cuatro/area-cuatro.component';
import {AreaCincoComponent} from './area-cinco/area-cinco.component';
import {AreaSeisComponent} from './area-seis/area-seis.component';
import {AreaSieteComponent} from './area-siete/area-siete.component';
import {AreaOchoComponent} from './area-ocho/area-ocho.component';
import {AreaOnceComponent} from './area-once/area-once.component';
import {AreaCatorceComponent} from './area-catorce/area-catorce.component';
import {AreaQuinceComponent} from './area-quince/area-quince.component';
import {AreaDiecisieteComponent} from './area-diecisiete/area-diecisiete.component';
import {AreaNueveComponent} from './area-nueve/area-nueve.component';
import {AreaDiezComponent} from './area-diez/area-diez.component';
import {AreaDoceComponent} from './area-doce/area-doce.component';
import {AreaDieciseisComponent} from './area-dieciseis/area-dieciseis.component';
import {AreaTreceComponent} from './area-trece/area-trece.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FormularioComponent } from './formulario/formulario.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';

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
    AreaOnceComponent,
    AreaCatorceComponent,
    AreaQuinceComponent,
    AreaDiecisieteComponent,
    AreaNueveComponent,
    AreaDiezComponent,
    AreaDoceComponent,
    AreaDieciseisComponent,
    AreaTreceComponent,
    FormularioComponent,
    EstadisticasComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    RouterModule.forRoot(
      RUTAS_APP, {useHash: true}
    ),
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
