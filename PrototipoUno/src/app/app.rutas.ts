import {Routes} from "@angular/router";
import {AreaUnoComponent} from "./area-uno/area-uno.component";
import {InicioComponent} from "./inicio/inicio.component";
import {IngresarDatosComponent} from "./ingresar-datos/ingresar-datos.component";
import {AreaDosComponent} from './area-dos/area-dos.component';
import {AreaTresEspacialComponent} from "./area-tres-espacial/area-tres-espacial.component";
import {AreaTresTemporalComponent} from "./area-tres-temporal/area-tres-temporal.component";
import {AreaCuatroComponent} from "./area-cuatro/area-cuatro.component";
import {AreaCincoComponent} from "./area-cinco/area-cinco.component";
import {AreaSeisComponent} from "./area-seis/area-seis.component";
import {AreaSieteComponent} from "./area-siete/area-siete.component";
import {AreaOchoComponent} from "./area-ocho/area-ocho.component";



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
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];
