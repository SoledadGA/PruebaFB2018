import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {
  MatCheckboxModule,
  MatButtonModule,
  MatFormFieldModule,
  MatMenuModule,
  MatTableModule,
  MatSortModule,
  MatSelectModule
} from '@angular/material';
import {ChartModule} from 'primeng/chart';
import {DragDropModule} from '@angular/cdk/drag-drop';

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
import {AreaTreceComponent} from './area-trece/area-trece.component';
import {AreaDieciseisComponent} from './area-dieciseis/area-dieciseis.component';
import {FormularioComponent} from './formulario/formulario.component';
import {EstadisticasComponent} from './estadisticas/estadisticas.component';
import {RecomendacionesComponent} from './recomendaciones/recomendaciones.component';
import { AreaCinco2Component } from './area-cinco2/area-cinco2.component';
import {HijoComponent} from './hijo/hijo.component';
import { AsignarParalelosComponent } from './asignar-paralelos/asignar-paralelos.component';
import { CambioParaleloComponent } from './cambio-paralelo/cambio-paralelo.component';
import { NominaParaleloComponent } from './nomina-paralelo/nomina-paralelo.component';
import { PruebaComponent } from './prueba/prueba.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';
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
    AreaTreceComponent,
    AreaDieciseisComponent,
    FormularioComponent,
    EstadisticasComponent,
    RecomendacionesComponent,
    AreaCinco2Component,
    HijoComponent,
    AsignarParalelosComponent,
    CambioParaleloComponent,
    NominaParaleloComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    ChartModule,
    DragDropModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,
    RouterModule.forRoot(
      RUTAS_APP, {useHash: true}
    ),
    NgbModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
