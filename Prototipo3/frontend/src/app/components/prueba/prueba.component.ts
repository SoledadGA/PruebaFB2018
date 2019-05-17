import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  cabecera = 'imagenes/estadisticas/1.png';
  botonImprimir = 'imagenes/formulario/imprimir.png';
  mostrarPantallaPrincipal = true;
  mostrarCuadro1 = false;
  mostrarGrafico1 = false;
  mostrarCuadro2 = false;
  mostrarBotonRegresar = false;
  mostrarCabecera = true;

  regresar(){
    this.mostrarPantallaPrincipal =true;
    this.mostrarBotonRegresar =false;
    this.mostrarGrafico1 = false;
    this.mostrarCuadro1 = false;
    this.mostrarCuadro2 =false;
    this.mostrarCabecera = true;
  }
  verCuadro1(){
    this.mostrarPantallaPrincipal = false;
    this.mostrarCuadro1 = true;
    this.mostrarBotonRegresar = true;
    this.mostrarCabecera = false;
  }
  verCuadro2(){
    this.mostrarPantallaPrincipal = false;
    this.mostrarCuadro2 = true;
    this.mostrarBotonRegresar = true;
    this.mostrarCabecera = false;
  }
  verGrafico1(){
    this.mostrarPantallaPrincipal = false;
    this.mostrarGrafico1 = true
    this.mostrarBotonRegresar = true;
    this.mostrarCabecera = false;
  }

  imprimir() {
    if (window.print) {
      window.print();
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
