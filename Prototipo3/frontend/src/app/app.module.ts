import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
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
import {AreaUnoComponent} from './components/area-uno/area-uno.component';
import {RouterModule} from '@angular/router';
import {RUTAS_APP} from './app.rutas';
import {InicioComponent} from './components/inicio/inicio.component';
import {IngresarDatosComponent} from './components/ingresar-datos/ingresar-datos.component';
import {AreaDosComponent} from './components/area-dos/area-dos.component';
import {AreaTresEspacialComponent} from './components/area-tres-espacial/area-tres-espacial.component';
import {AreaTresTemporalComponent} from './components/area-tres-temporal/area-tres-temporal.component';
import {AreaCuatroComponent} from './components/area-cuatro/area-cuatro.component';
import {AreaCincoComponent} from './components/area-cinco/area-cinco.component';
import {AreaSeisComponent} from './components/area-seis/area-seis.component';
import {AreaSieteComponent} from './components/area-siete/area-siete.component';
import {AreaOchoComponent} from './components/area-ocho/area-ocho.component';
import {AreaOnceComponent} from './components/area-once/area-once.component';
import {AreaCatorceComponent} from './components/area-catorce/area-catorce.component';
import {AreaQuinceComponent} from './components/area-quince/area-quince.component';
import {AreaDiecisieteComponent} from './components/area-diecisiete/area-diecisiete.component';
import {AreaNueveComponent} from './components/area-nueve/area-nueve.component';
import {AreaDiezComponent} from './components/area-diez/area-diez.component';
import {AreaDoceComponent} from './components/area-doce/area-doce.component';
import {AreaTreceComponent} from './components/area-trece/area-trece.component';
import {AreaDieciseisComponent} from './components/area-dieciseis/area-dieciseis.component';
import {FormularioComponent} from './components/formulario/formulario.component';
import {EstadisticasComponent} from './components/estadisticas/estadisticas.component';
import {RecomendacionesComponent} from './components/recomendaciones/recomendaciones.component';
import { AreaCinco2Component } from './components/area-cinco2/area-cinco2.component';
import {HijoComponent} from './components/ayuda/hijo.component';
import { AsignarParalelosComponent } from './components/asignar-paralelos/asignar-paralelos.component';
import { CambioParaleloComponent } from './components/cambio-paralelo/cambio-paralelo.component';
import { NominaParaleloComponent } from './components/nomina-paralelo/nomina-paralelo.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { EstadisticasFreeComponent } from './components/estadisticas-free/estadisticas-free.component';
import {MatStepperModule} from '@angular/material/stepper';

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
    PruebaComponent,
    EstadisticasFreeComponent
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
    FormsModule,
    HttpClientModule,
    MatExpansionModule,
    MatStepperModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
