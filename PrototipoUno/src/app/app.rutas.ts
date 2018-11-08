import {Routes} from "@angular/router";
import {AreaUnoComponent} from "./area-uno/area-uno.component";
import {InicioComponent} from "./inicio/inicio.component";
import {IngresarDatosComponent} from "./ingresar-datos/ingresar-datos.component";
import {AreaDosComponent} from './area-dos/area-dos.component';
import {AreaTresEspacialComponent} from "./area-tres-espacial/area-tres-espacial.component";



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
    path: 'areaTresEspacial',
    component: AreaTresEspacialComponent,
  },


  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];
