import {Routes} from "@angular/router";
import {InicioComponent} from "./inicio/inicio.component";
import {PruebaComponent} from "./prueba/prueba.component";
import {Area1Component} from "./area1/area1.component";

export const RUTAS_APP: Routes = [
  {
    path: 'home',
    component: Area1Component,
  },
  {
    path: 'prueba',
    component: PruebaComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];
