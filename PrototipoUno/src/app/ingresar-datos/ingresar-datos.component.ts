import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ingresar-datos',
  templateUrl: './ingresar-datos.component.html',
  styleUrls: ['./ingresar-datos.component.css']
})
export class IngresarDatosComponent implements OnInit {

  nombre;
  anioEGB;
  paralelo;
  fecha = new Date();
  txtFecha = (this.fecha.getDate() + '/' + (this.fecha.getMonth() + 1) + '/' + (this.fecha.getFullYear()));

  guardar() {
    location.href = '/#/areaUno';
    console.log('Nombre: ' + this.nombre);
    console.log('Año: ' + this.anioEGB);
    console.log('Paralelo: ' + this.paralelo);
    console.log('Fecha: ' + this.fecha);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
