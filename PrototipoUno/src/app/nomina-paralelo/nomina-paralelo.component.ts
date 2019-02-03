import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nomina-paralelo',
  templateUrl: './nomina-paralelo.component.html',
  styleUrls: ['./nomina-paralelo.component.css']
})
export class NominaParaleloComponent implements OnInit {
  anioLectivo = 2017;
  imagenCabecera = 'imagenes/logo4.png';
  cabecera1 = 'UNIDAD EDUCATIVA MUNICIPAL EXPERIMENTAL “ANTONIO JOSÉ DE SUCRE”';
  cabecera2 = 'AÑO LECTIVO:';
  cabecera3 = 'RESULTADOS PRUEBA DE FUNCIONES BÁSICAS';
  cabecera4 = 'PARALELO "A"';
  valor = 0;
  datos3: any[] = [
    {
      position: 1,
      name: 'Tania Soledad Gallardo Andrade'
    },
    {
      position: 2,
      name: 'Estudiante 2'
    },
    {
      position: 3,
      name: 'Estudiante 3'
    },
    {
      position: 4,
      name: 'Estudiante 4'
    },
    {
      position: 5,
      name: 'Estudiante 5'
    },
    {
      position: 6,
      name: 'Estudiante 6'
    },
    {
      position: 7,
      name: 'Estudiante 7'
    },
    {
      position: 8,
      name: 'Estudiante 8'
    },
    {
      position: 9,
      name: 'Estudiante 9'
    },
    {
      position: 10,
      name: 'Estudiante 10'
    }
  ];
  displayedColumns2: any[] = ['position', 'name'];

  irFormulario() {
    location.href = '/#/cambiarParalelo';
  }

  constructor() {
  }

  ngOnInit() {
  }

}
