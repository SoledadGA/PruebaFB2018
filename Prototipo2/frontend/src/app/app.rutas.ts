import {Routes} from '@angular/router';
import {AreaUnoComponent} from './components/area-uno/area-uno.component';
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
import {HijoComponent} from './components/hijo/hijo.component';
import {AsignarParalelosComponent} from './components/asignar-paralelos/asignar-paralelos.component';
import {CambioParaleloComponent} from './components/cambio-paralelo/cambio-paralelo.component';
import {NominaParaleloComponent} from './components/nomina-paralelo/nomina-paralelo.component';
import {PruebaComponent} from './components/prueba/prueba.component';
import {AreaCinco2Component} from './components/area-cinco2/area-cinco2.component';

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
