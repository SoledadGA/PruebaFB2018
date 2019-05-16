import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-asignar-paralelos',
  templateUrl: './asignar-paralelos.component.html',
  styleUrls: ['./asignar-paralelos.component.css']
})
export class AsignarParalelosComponent implements OnInit {
  anioLectivo = 2017;
  imagenCabecera = 'imagenes/logo4.png';
  cabecera1 = 'UNIDAD EDUCATIVA MUNICIPAL EXPERIMENTAL “ANTONIO JOSÉ DE SUCRE”';
  cabecera2 = 'AÑO LECTIVO:';
  cabecera3 = 'RESULTADOS PRUEBA DE FUNCIONES BÁSICAS';
  valor = 0;
  listaParalelos = ['none', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  paralelos;
  errores;
  grupo;
  datos3: any[] = [
    {
      position: 1,
      name: 'Estudiante 2',
      totalErrores: 0,
      grupo: this.definirGrupos([9, 0, 9, 18, 10, 8, 9, 18, 0, 10], 0)
    },
    {
      position: 2,
      name: 'Estudiante 9',
      totalErrores: 0,
      grupo: this.definirGrupos([9, 0, 9, 18, 10, 8, 9, 18, 0, 10], 0)
    },
    {
      position: 3,
      name: 'Estudiante 6',
      totalErrores: 8,
      grupo: this.definirGrupos([9, 0, 9, 18, 10, 8, 9, 18, 0, 10], 8)
    },
    {
      position: 4,
      name: 'Estudiante 3',
      totalErrores: 9,
      grupo: this.definirGrupos([9, 0, 9, 18, 10, 8, 9, 18, 0, 10], 9)
    },
    {
      position: 5,
      name: 'Estudiante 7',
      totalErrores: 9,
      grupo: this.definirGrupos([9, 0, 9, 18, 10, 8, 9, 18, 0, 10], 9)
    },
    {
      position: 6,
      name: 'Tania Soledad Gallardo Andrade',
      totalErrores: 9,
      grupo: this.definirGrupos([9, 0, 9, 18, 10, 8, 9, 18, 0, 10], 9)
    },
    {
      position: 7,
      name: 'Estudiante 5',
      totalErrores: 10,
      grupo: this.definirGrupos([9, 0, 9, 18, 10, 8, 9, 18, 0, 10], 10)
    },
    {
      position: 8,
      name: 'Estudiante 10',
      totalErrores: 10,
      grupo: this.definirGrupos([9, 0, 9, 18, 10, 8, 9, 18, 0, 10], 10)
    },
    {
      position: 9,
      name: 'Estudiante 4',
      totalErrores: 18,
      grupo: this.definirGrupos([9, 0, 9, 18, 10, 8, 9, 18, 0, 10], 18)
    },
    {
      position: 10,
      name: 'Estudiante 8',
      totalErrores: 18,
      grupo: this.definirGrupos([9, 0, 9, 18, 10, 8, 9, 18, 0, 10], 18)
    }
  ];
  displayedColumns2: any[] = ['position', 'paralelo', 'name', 'totalErrores', 'grupo'];
  descripcionGrupos = [
    'Grupo Inferior',
    'Aprestamiento Intensivo en todas las áreas',
    'Grupo Normal',
    'Intensificar en áreas déficitarias',
    'Grupo Bueno',
    'Aprestamiento Normal'];

  definirGrupos(arreglo, entrada) {
    let i = 0, min = 0, max = 0, rango;
    this.errores = 0;
    for (i; i < arreglo.length; i++) {
      if (min > arreglo[i]) {
        min = arreglo[i];
      }
      if (max < arreglo[i]) {
        max = arreglo[i];
      }
    }
    rango = (max - min) / 3;
    console.log('Minimo ' + min + ' maximo: ' + max + ' rango: ' + rango);
    if (entrada >= min && entrada <= rango) {
      this.grupo = 'Grupo Bueno';
    } else if (entrada >= rango + 1 && entrada <= 2 * rango) {
      this.grupo = 'Grupo Normal';
    } else {
      this.grupo = 'Grupo Inferior';
    }
    return this.grupo;
  }

  guardar() {
    location.href = '/#/inicio';
  }

  constructor() {
  }

  ngOnInit() {
  }

}
