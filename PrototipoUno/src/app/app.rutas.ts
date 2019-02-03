import {Routes} from '@angular/router';
import {AreaUnoComponent} from './area-uno/area-uno.component';
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
import {HijoComponent} from './hijo/hijo.component';
import {AsignarParalelosComponent} from './asignar-paralelos/asignar-paralelos.component';
import {CambioParaleloComponent} from './cambio-paralelo/cambio-paralelo.component';
import {NominaParaleloComponent} from './nomina-paralelo/nomina-paralelo.component';
import {PruebaComponent} from './prueba/prueba.component';
import {AreaCinco2Component} from './area-cinco2/area-cinco2.component';

export const RUTAS_APP: Routes = [
  {
    path: 'home',
    component: InicioComponent,
  },
  {
    path: 'ingresarDatos',
    component: IngresarDatosComponent,
  },
  {
    path: 'areaUno',
    component: AreaUnoComponent,
  },
  {
    path: 'areaDos',
    component: AreaDosComponent,
  },
  {
    path: 'areaTresTemporal',
    component: AreaTresTemporalComponent,
  },
  {
    path: 'areaTresEspacial',
    component: AreaTresEspacialComponent,
  },
  {
    path: 'areaCuatro',
    component: AreaCuatroComponent,
  },
  {
    path: 'areaCinco',
    component: AreaCincoComponent,
  },
  {
    path: 'areaSeis',
    component: AreaSeisComponent,
  },
  {
    path: 'areaSiete',
    component: AreaSieteComponent,
  },
  {
    path: 'areaOcho',
    component: AreaOchoComponent,
  },
  {
    path: 'areaNueve',
    component: AreaNueveComponent,
  },
  {
    path: 'areaDiez',
    component: AreaDiezComponent,
  },
  {
    path: 'areaOnce',
    component: AreaOnceComponent,
  },
  {
    path: 'areaDoce',
    component: AreaDoceComponent,
  },
  {
    path: 'areaTrece',
    component: AreaTreceComponent,
  },
  {
    path: 'areaCatorce',
    component: AreaCatorceComponent,
  },
  {
    path: 'areaQuince',
    component: AreaQuinceComponent,
  },
  {
    path: 'areaDieciseis',
    component: AreaDieciseisComponent,
  },
  {
    path: 'areaDiecisiete',
    component: AreaDiecisieteComponent,
  },
  {
    path: 'formulario',
    component: FormularioComponent,
  },
  {
    path: 'recomendaciones',
    component: RecomendacionesComponent,
  },
  {
    path: 'estadisticas',
    component: EstadisticasComponent,
  },
  {
    path: 'asignarParalelo',
    component: AsignarParalelosComponent,
  },
  {
    path: 'nominaParalelo',
    component: NominaParaleloComponent,
  },
  {
    path: 'cambiarParalelo',
    component: CambioParaleloComponent,
  },
  {
    path: 'pruebas',
    component: PruebaComponent,
  },
  {
    path: 'areaCincoDos',
    component: AreaCinco2Component,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];
