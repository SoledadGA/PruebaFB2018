import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  anioLectivo = 2017;
  imagenCabecera = 'imagenes/logo4.png';
  cabecera1 = 'UNIDAD EDUCATIVA MUNICIPAL EXPERIMENTAL “ANTONIO JOSÉ DE SUCRE”';
  cabecera2 = 'AÑO LECTIVO:';
  cabecera3 = 'RESULTADOS PRUEBA DE FUNCIONES BÁSICAS';
  subtitulos = [
    'Cuadro No. 1. Evaluación Individual',
    'Gráfico No. 1. Errores Grupales Frecuentes',
    'Cuadro No. 2. Grupos de Trabajo'];
  displayedColumns: any[] = ['position', 'name', 'area1', 'area2', 'area3T', 'area3E', 'area4', 'area5',
    'area6', 'area7', 'area8', 'area9', 'area10', 'area11', 'area12', 'area13', 'area14', 'area15', 'area16',
    'area17', 'totalAciertos', 'totalErrores'];
  displayedColumns2: any[] = ['position', 'name', 'totalErrores', 'grupo'];
  datos2: any[] = [
    {
      position: 1,
      name: 'Tania Soledad Gallardo Andrade',
      area1: this.transformacion(false),
      area2: this.transformacion(true),
      area3T: this.transformacion(false),
      area3E: this.transformacion(true),
      area4: this.transformacion(false),
      area5: this.transformacion(true),
      area6: this.transformacion(false),
      area7: this.transformacion(true),
      area8: this.transformacion(false),
      area9: this.transformacion(true),
      area10: this.transformacion(false),
      area11: this.transformacion(true),
      area12: this.transformacion(false),
      area13: this.transformacion(true),
      area14: this.transformacion(false),
      area15: this.transformacion(true),
      area16: this.transformacion(false),
      area17: this.transformacion(true),
      totalAciertos: this.totalAciertos([false, true, false, true, false, true,
        false, true, false, true, false, true, false, true, false, true, false, true]),
      totalErrores: this.totalErrores([false, true, false, true, false, true,
        false, true, false, true, false, true, false, true, false, true, false, true])
    },
    {
      position: 2,
      name: 'Estudiante 2',
      area1: this.transformacion(true),
      area2: this.transformacion(true),
      area3T: this.transformacion(true),
      area3E: this.transformacion(true),
      area4: this.transformacion(true),
      area5: this.transformacion(true),
      area6: this.transformacion(true),
      area7: this.transformacion(true),
      area8: this.transformacion(true),
      area9: this.transformacion(true),
      area10: this.transformacion(true),
      area11: this.transformacion(true),
      area12: this.transformacion(true),
      area13: this.transformacion(true),
      area14: this.transformacion(true),
      area15: this.transformacion(true),
      area16: this.transformacion(true),
      area17: this.transformacion(true),
      totalAciertos: this.totalAciertos([true, true, true, true, true, true,
        true, true, true, true, true, true, true, true, true, true, true, true]),
      totalErrores: this.totalErrores([true, true, true, true, true, true,
        true, true, true, true, true, true, true, true, true, true, true, true])
    },
    {
      position: 3,
      name: 'Estudiante 3',
      area1: this.transformacion(true),
      area2: this.transformacion(false),
      area3T: this.transformacion(true),
      area3E: this.transformacion(false),
      area4: this.transformacion(true),
      area5: this.transformacion(false),
      area6: this.transformacion(true),
      area7: this.transformacion(false),
      area8: this.transformacion(true),
      area9: this.transformacion(false),
      area10: this.transformacion(true),
      area11: this.transformacion(false),
      area12: this.transformacion(true),
      area13: this.transformacion(false),
      area14: this.transformacion(true),
      area15: this.transformacion(false),
      area16: this.transformacion(true),
      area17: this.transformacion(false),
      totalAciertos: this.totalAciertos([true, false, true, false, true, false, true,
        false, true, false, true, false, true, false, true, false, true, false]),
      totalErrores: this.totalErrores([true, false, true, false, true, false, true,
        false, true, false, true, false, true, false, true, false, true, false])
    },
    {
      position: 4,
      name: 'Estudiante 4',
      area1: this.transformacion(false),
      area2: this.transformacion(false),
      area3T: this.transformacion(false),
      area3E: this.transformacion(false),
      area4: this.transformacion(false),
      area5: this.transformacion(false),
      area6: this.transformacion(false),
      area7: this.transformacion(false),
      area8: this.transformacion(false),
      area9: this.transformacion(false),
      area10: this.transformacion(false),
      area11: this.transformacion(false),
      area12: this.transformacion(false),
      area13: this.transformacion(false),
      area14: this.transformacion(false),
      area15: this.transformacion(false),
      area16: this.transformacion(false),
      area17: this.transformacion(false),
      totalAciertos: this.totalAciertos([false, false, false, false, false, false, false,
        false, false, false, false, false, false, false, false, false, false, false]),
      totalErrores: this.totalErrores([false, false, false, false, false, false, false,
        false, false, false, false, false, false, false, false, false, false, false])
    },
    {
      position: 5,
      name: 'Estudiante 5',
      area1: this.transformacion(false),
      area2: this.transformacion(false),
      area3T: this.transformacion(true),
      area3E: this.transformacion(true),
      area4: this.transformacion(false),
      area5: this.transformacion(false),
      area6: this.transformacion(true),
      area7: this.transformacion(true),
      area8: this.transformacion(false),
      area9: this.transformacion(false),
      area10: this.transformacion(true),
      area11: this.transformacion(true),
      area12: this.transformacion(false),
      area13: this.transformacion(false),
      area14: this.transformacion(true),
      area15: this.transformacion(true),
      area16: this.transformacion(false),
      area17: this.transformacion(false),
      totalAciertos: this.totalAciertos([false, false, true, true, false, false, true,
        true, false, false, true, true, false, false, true, true, false, false]),
      totalErrores: this.totalErrores([false, false, true, true, false, false, true,
        true, false, false, true, true, false, false, true, true, false, false])
    },
    {
      position: 6,
      name: 'Estudiante 6',
      area1: this.transformacion(true),
      area2: this.transformacion(true),
      area3T: this.transformacion(false),
      area3E: this.transformacion(false),
      area4: this.transformacion(true),
      area5: this.transformacion(true),
      area6: this.transformacion(false),
      area7: this.transformacion(false),
      area8: this.transformacion(true),
      area9: this.transformacion(true),
      area10: this.transformacion(false),
      area11: this.transformacion(false),
      area12: this.transformacion(true),
      area13: this.transformacion(true),
      area14: this.transformacion(false),
      area15: this.transformacion(false),
      area16: this.transformacion(true),
      area17: this.transformacion(true),
      totalAciertos: this.totalAciertos([true, true, false, false, true, true, false, false, true,
        true, false, false, true, true, false, false, true, true]),
      totalErrores: this.totalErrores([true, true, false, false, true, true, false, false, true,
        true, false, false, true, true, false, false, true, true])
    },
    {
      position: 7,
      name: 'Estudiante 7',
      area1: this.transformacion(false),
      area2: this.transformacion(true),
      area3T: this.transformacion(false),
      area3E: this.transformacion(true),
      area4: this.transformacion(false),
      area5: this.transformacion(true),
      area6: this.transformacion(false),
      area7: this.transformacion(true),
      area8: this.transformacion(false),
      area9: this.transformacion(true),
      area10: this.transformacion(false),
      area11: this.transformacion(true),
      area12: this.transformacion(false),
      area13: this.transformacion(true),
      area14: this.transformacion(false),
      area15: this.transformacion(true),
      area16: this.transformacion(false),
      area17: this.transformacion(true),
      totalAciertos: this.totalAciertos([false, true, false, true, false, true,
        false, true, false, true, false, true, false, true, false, true, false, true]),
      totalErrores: this.totalErrores([false, true, false, true, false, true,
        false, true, false, true, false, true, false, true, false, true, false, true])
    },
    {
      position: 8,
      name: 'Estudiante 8',
      area1: this.transformacion(false),
      area2: this.transformacion(false),
      area3T: this.transformacion(false),
      area3E: this.transformacion(false),
      area4: this.transformacion(false),
      area5: this.transformacion(false),
      area6: this.transformacion(false),
      area7: this.transformacion(false),
      area8: this.transformacion(false),
      area9: this.transformacion(false),
      area10: this.transformacion(false),
      area11: this.transformacion(false),
      area12: this.transformacion(false),
      area13: this.transformacion(false),
      area14: this.transformacion(false),
      area15: this.transformacion(false),
      area16: this.transformacion(false),
      area17: this.transformacion(false),
      totalAciertos: this.totalAciertos([false, false, false, false, false, false, false,
        false, false, false, false, false, false, false, false, false, false, false]),
      totalErrores: this.totalErrores([false, false, false, false, false, false, false,
        false, false, false, false, false, false, false, false, false, false, false])
    },
    {
      position: 9,
      name: 'Estudiante 9',
      area1: this.transformacion(true),
      area2: this.transformacion(true),
      area3T: this.transformacion(true),
      area3E: this.transformacion(true),
      area4: this.transformacion(true),
      area5: this.transformacion(true),
      area6: this.transformacion(true),
      area7: this.transformacion(true),
      area8: this.transformacion(true),
      area9: this.transformacion(true),
      area10: this.transformacion(true),
      area11: this.transformacion(true),
      area12: this.transformacion(true),
      area13: this.transformacion(true),
      area14: this.transformacion(true),
      area15: this.transformacion(true),
      area16: this.transformacion(true),
      area17: this.transformacion(true),
      totalAciertos: this.totalAciertos([true, true, true, true, true, true,
        true, true, true, true, true, true, true, true, true, true, true, true]),
      totalErrores: this.totalErrores([true, true, true, true, true, true,
        true, true, true, true, true, true, true, true, true, true, true, true])
    },
    {
      position: 10,
      name: 'Estudiante 10',
      area1: this.transformacion(false),
      area2: this.transformacion(false),
      area3T: this.transformacion(true),
      area3E: this.transformacion(true),
      area4: this.transformacion(false),
      area5: this.transformacion(false),
      area6: this.transformacion(true),
      area7: this.transformacion(true),
      area8: this.transformacion(false),
      area9: this.transformacion(false),
      area10: this.transformacion(true),
      area11: this.transformacion(true),
      area12: this.transformacion(false),
      area13: this.transformacion(false),
      area14: this.transformacion(true),
      area15: this.transformacion(true),
      area16: this.transformacion(false),
      area17: this.transformacion(false),
      totalAciertos: this.totalAciertos([false, false, true, true, false, false, true,
        true, false, false, true, true, false, false, true, true, false, false]),
      totalErrores: this.totalErrores([false, false, true, true, false, false, true,
        true, false, false, true, true, false, false, true, true, false, false])
    }
  ];
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
  valor = 0;
  calificacion;
  aciertos;
  errores;
  grupo;
  porcentajes = 0;
  negativos = 0;
  datosGrafico: any;
  opcionesGrafico: any;
  descripcionGrupos = [
    'Grupo Inferior',
    'Aprestamiento Intensivo en todas las áreas',
    'Grupo Normal',
    'Intensificar en áreas déficitarias',
    'Grupo Bueno',
    'Aprestamiento Normal'];
  nomina = [
    'Tania Soledad Gallardo Andrade', 'nombre2', 'nombre3', 'nombre4', 'nombre5', 'nombre6',
    'nombre7', 'nombre8', 'nombre9', 'nombre10', 'nombre11', 'nombre12',
    'nombre13', 'nombre14', 'nombre15', 'nombre16', 'nombre17', 'nombre18', 'nombre19'];

  valoresAfirmativos = [
    1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12,
    13, 14, 15, 16, 17, 18];
  titulo = [
    'I. Esquema Corporal', 'II. Dominancia Lateral', 'III. Orientación Temporal',
    'III. Orientación Espacial', 'IV. Coordinación Dinámica', 'V. Receptiva Auditiva',
    'VI. Receptivo Visual', 'VII. Asociación Auditiva', 'VIII. Expresivo Manual',
    'IX. Cierre Auditivo Vocal', 'X. Pronunciación', 'XI. Memoria Secuencia Auditiva',
    'XII. Ritmo', 'XIII. Memoria Visual', 'XIV. Discriminación Auditiva',
    'XV. Coordinación Visomotora', 'XVI. Atención y Fatiga', 'XVII. Desarrollo Manual'];

  negativosGrafico = [
    94.74, 89.47, 84.21, 78.95, 73.68, 68.42,
    63.16, 57.89, 52.63, 47.37, 42.11, 36.84,
    31.58, 26.32, 21.05, 15.79, 10.53, 5.26];
  negativosGraficoRetest = [
    94.74, 89.47, 84.21, 78.95, 73.68, 68.42,
    63.16, 57.89, 52.63, 47.37, 42.11, 36.84,
    73.68, 52.63, 52.63, 15.79, 10.53, 52.63];

  porcentaje(entrada: number, arreglo) {
    this.porcentajes = (arreglo[entrada] / this.nomina.length);
    // this.porcentajes = this.porcentajes * 100;
    // console.log(this.porcentajes);
    return this.porcentajes.toFixed(2);
  }

  calcularNegativos(arreglo, entrada: number) {
    this.negativos = this.nomina.length - this.valoresAfirmativos[entrada];
    return this.negativos;
  }

  transformacion(entrada: boolean) {
    if (entrada === false) {
      this.calificacion = '-';
    } else {
      this.calificacion = '+';
    }
    return this.calificacion;
  }

  totalAciertos(arreglo) {
    let i = 0;
    this.aciertos = 0;
    for (i; i < arreglo.length; i++) {
      if (arreglo[i] === true) {
        this.aciertos = this.aciertos + 1;
      }
    }
    return this.aciertos;
  }

  totalErrores(arreglo) {
    let i = 0;
    this.errores = 0;
    for (i; i < arreglo.length; i++) {
      if (arreglo[i] === false) {
        this.errores = this.errores + 1;
      }
    }
    return this.errores;
  }

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


  imprimir() {
    if (window.print) {
      window.print();
    }
  }

  irFormulario() {
    location.href = '/#/formulario';
  }

  constructor() {
    this.datosGrafico = {
      labels: this.titulo,
      datasets: [
        {
          label: 'Test',
          backgroundColor: '#82d4f5',
          borderColor: '#1f19e5',
          data: this.negativosGrafico
        },
        {
          label: 'Re Test',
          backgroundColor: '#FA5882',
          borderColor: '#FF0040',
          data: this.negativosGraficoRetest
        }
      ],
    };
    this.opcionesGrafico = {
      onAnimationComplete: function () {
        this.showTooltip(this.segments, true);
      },
      tooltipEvents: [],
      tooltips: {
        intersect: true
      },
      showTooltips: true,
      title: {
        display: false,
        text: 'My Title',
        fontSize: 16
      },
      legend: {
        position: 'top'
      }
    };
  }

  ngOnInit() {
  }
}
