import {Component, OnInit} from '@angular/core';
import {EstudianteService} from "../../services/estudiante.service";
import {Estudiante} from "../../models/estudiante";

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css'],
  providers: [EstudianteService]
})
export class EstadisticasComponent implements OnInit {

  tamanio = 0 ;
  identificador1 = localStorage.getItem('tipoE');
  identificador2 = localStorage.getItem('anioE');
  identificador3 = localStorage.getItem('paraleloE');
  any = [];
  cabecera = 'imagenes/estadisticas/1.png';
  botonImprimir = 'imagenes/formulario/imprimir.png';
  mostrarPantallaPrincipal = true;
  mostrarCuadro1 = false;
  mostrarGrafico1 = false;
  mostrarCuadro2 = false;
  mostrarBotonRegresar = false;
  mostrarCabecera = true;
  tipoDeTest = 5;

  imagenCabecera = 'imagenes/logo4.png';
  cabecera1 = 'UNIDAD EDUCATIVA MUNICIPAL EXPERIMENTAL “ANTONIO JOSÉ DE SUCRE”';
  cabecera2 = 'AÑO LECTIVO:';
  cabecera3 = 'RESULTADOS PRUEBA DE FUNCIONES BÁSICAS';
  cabecera4 = 'PARALELO';
  valor = 0;
  mostrarParalelo = false;
  subtitulos = [
    'Cuadro No. 1. Evaluación Individual',
    'Gráfico No. 1. Errores Grupales Frecuentes',
    'Cuadro No. 2. Grupos de Trabajo'];

  /*Datos cuadro 1*/
  columnasCuadro1: any[] = ['name', 'area1', 'area2', 'area3', 'area4', 'area5',
    'area6', 'area7', 'area8', 'area9', 'area10', 'area11', 'area12', 'area13', 'area14', 'area15', 'area16',
    'area17', 'totalAciertos', 'totalErrores'];
  listaGeneralEstudiantes: any[];
  totalAreasDebilitadasColumna = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  /*Datos cuadro 2*/
  columnasCuadro2: any[] = ['name', 'totalErrores', 'grupo'];
  descripcionGruposCuadro2 = [
    'Grupo Inferior',
    'Aprestamiento Intensivo en todas las áreas',
    'Grupo Normal',
    'Intensificar en áreas déficitarias',
    'Grupo Bueno',
    'Aprestamiento Normal'];
  datosOrdenados: any = [];

  /*Datos grafico 1*/
  informacionGrafico: any;
  opcionesGrafico: any;
  titulosGrafico = [
    'I. Esquema Corporal', 'II. Dominancia Lateral', 'III. Orientación Temporal',
    'III. Orientación Espacial', 'IV. Coordinación Dinámica', 'V. Receptiva Auditiva',
    'VI. Receptivo Visual', 'VII. Asociación Auditiva', 'VIII. Expresivo Manual',
    'IX. Cierre Auditivo Vocal', 'X. Pronunciación', 'XI. Memoria Secuencia Auditiva',
    'XII. Ritmo', 'XIII. Memoria Visual', 'XIV. Discriminación Auditiva',
    'XV. Coordinación Visomotora', 'XVI. Atención y Fatiga', 'XVII. Desarrollo Manual'];
  public datosGrafico: any = [];

  negativosGrafico = [
    94.74, 89.47, 84.21, 78.95, 73.68, 68.42,
    63.16, 57.89, 52.63, 47.37, 42.11, 36.84,
    31.58, 26.32, 21.05, 15.79, 10.53, 5.26];
  negativosGraficoRetest = [
    94.74, 89.47, 84.21, 78.95, 73.68, 68.42,
    63.16, 57.89, 52.63, 47.37, 42.11, 36.84,
    73.68, 52.63, 52.63, 15.79, 10.53, 52.63];
  titulo = [
    'I. Esquema Corporal', 'II. Dominancia Lateral',
    'III. Orientación', 'IV. Coordinación Dinámica', 'V. Receptiva Auditiva',
    'VI. Receptivo Visual', 'VII. Asociación Auditiva', 'VIII. Expresivo Manual',
    'IX. Cierre Auditivo Vocal', 'X. Pronunciación', 'XI. Memoria Secuencia Auditiva',
    'XII. Ritmo', 'XIII. Memoria', 'XIV. Discriminación Auditiva',
    'XV. Coordinación Visomotora', 'XVI. Atención y Fatiga', 'XVII. Desarrollo Manual'];

  /*Funciones cuadro 1*/
  transformacionPositivoNegativo(entrada: number) {
    let calificacion;
    if (entrada === 1) {
      calificacion = '-';
    } else {
      calificacion = '+';
    }
    return calificacion;
  }

  sumar() {
    let i = 0;
    this.totalAreasDebilitadasColumna = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i; i < this.tamanio; i++) {
      this.totalAreasDebilitadasColumna[0] = this.totalAreasDebilitadasColumna[0] + this.estServ.estudiantes[i].area1Total;
      this.totalAreasDebilitadasColumna[1] = this.totalAreasDebilitadasColumna[1] + this.estServ.estudiantes[i].area2Total;
      this.totalAreasDebilitadasColumna[2] = this.totalAreasDebilitadasColumna[2] + this.estServ.estudiantes[i].area3Total;
      this.totalAreasDebilitadasColumna[3] = this.totalAreasDebilitadasColumna[3] + this.estServ.estudiantes[i].area4Total;
      this.totalAreasDebilitadasColumna[4] = this.totalAreasDebilitadasColumna[4] + this.estServ.estudiantes[i].area5Total;
      this.totalAreasDebilitadasColumna[5] = this.totalAreasDebilitadasColumna[5] + this.estServ.estudiantes[i].area6Total;
      this.totalAreasDebilitadasColumna[6] = this.totalAreasDebilitadasColumna[6] + this.estServ.estudiantes[i].area7total;
      this.totalAreasDebilitadasColumna[7] = this.totalAreasDebilitadasColumna[7] + this.estServ.estudiantes[i].area8total;
      this.totalAreasDebilitadasColumna[8] = this.totalAreasDebilitadasColumna[8] + this.estServ.estudiantes[i].area9Total;
      this.totalAreasDebilitadasColumna[9] = this.totalAreasDebilitadasColumna[9] + this.estServ.estudiantes[i].area10total;
      this.totalAreasDebilitadasColumna[10] = this.totalAreasDebilitadasColumna[10] + this.estServ.estudiantes[i].area11total;
      this.totalAreasDebilitadasColumna[11] = this.totalAreasDebilitadasColumna[11] + this.estServ.estudiantes[i].area12total;
      this.totalAreasDebilitadasColumna[12] = this.totalAreasDebilitadasColumna[12] + this.estServ.estudiantes[i].area13Total;
      this.totalAreasDebilitadasColumna[13] = this.totalAreasDebilitadasColumna[13] + this.estServ.estudiantes[i].area14total;
      this.totalAreasDebilitadasColumna[14] = this.totalAreasDebilitadasColumna[14] + this.estServ.estudiantes[i].area15Total;
      this.totalAreasDebilitadasColumna[15] = this.totalAreasDebilitadasColumna[15] + this.estServ.estudiantes[i].area16Total;
      this.totalAreasDebilitadasColumna[16] = this.totalAreasDebilitadasColumna[16] + this.estServ.estudiantes[i].area17Total;
    }
    /*let j = 0, k = 0;
    for (j; j < this.any.length; j++) {
      console.log(this.estServ.estudiantes[j].nombreEstudiante);
    }
    for (k; k < 17; k++) {
      console.log('Area ' + k + ': ' + this.totalAreasDebilitadasColumna[k]);
    }*/
  }

  /*Funciones cuadro 2*/
  ordenarEstudiantes() {
    this.datosOrdenados = this.estServ.estudiantes.sort(function (a, b) {
      return b.totalAreasDebilitadas - a.totalAreasDebilitadas;
    });
  }
  //
  // definirGrupos(errores) {
  //   let min, max, rango, grupo;
  //   max = Math.max(this.datosOrdenados[0].totalAreasDebilitadas);
  //   min = Math.min(this.datosOrdenados[this.any.length - 1].totalAreasDebilitadas);
  //   rango = (max - min) / 3;
  //   //console.log('Minimo ' + min + ' maximo: ' + max + ' rango: ' + rango);
  //   if (errores >= min && errores < (rango + min)) {
  //     grupo = 'Grupo Bueno';
  //   } else if (errores >= (rango + min) && errores <= (max - rango)) {
  //     grupo = 'Grupo Normal';
  //   } else {
  //     grupo = 'Grupo Inferior';
  //   }
  //   return grupo;
  // }

  definirGrupos(errores) {
    let min, max, rango, grupo;
    max = Math.max(this.datosOrdenados[0].totalAreasDebilitadas);
    min = Math.min(this.datosOrdenados[this.any.length - 1].totalAreasDebilitadas);
    rango = (max - min) / 3;
    //console.log('Minimo ' + min + ' maximo: ' + max + ' rango: ' + rango);
    if (errores >= min && errores <= (rango + min)) {
      grupo = 'Grupo Bueno';
    } else if (errores > (rango + min) && errores <= (max - rango)) {
      grupo = 'Grupo Normal';
    } else {
      grupo = 'Grupo Inferior';
    }
    return grupo;
  }
  /*Funciones Grafico 1*/
  transformacionPorcentaje(entrada: number, arreglo) {
    let porcentaje;
    porcentaje = (arreglo[entrada] / this.tamanio);
    porcentaje = porcentaje * 100;
    console.log(porcentaje);
    return porcentaje.toFixed(2);
  }

  datosIniciales(){
    for(let i = 0 ; i < 17 ; i ++){
      this.datosGrafico[i] = this.datosGrafico[i] + i;
    }
  }

  llenarDatosGrafico() {
    let i = 0, j = 0;
    for (i; i < 17; i++) {
      this.datosGrafico[i] = this.transformacionPorcentaje(i, this.totalAreasDebilitadasColumna);
    }
    for (j; j < 17; j++) {
      console.log('% ' + j + ': ' + this.datosGrafico[j]);
    }
  }


  regresar() {
    this.mostrarPantallaPrincipal = true;
    this.mostrarBotonRegresar = false;
    this.mostrarGrafico1 = false;
    this.mostrarCuadro1 = false;
    this.mostrarCuadro2 = false;
    this.mostrarCabecera = true;
  }

  verCuadro1() {
    this.mostrarPantallaPrincipal = false;
    this.mostrarCuadro1 = true;
    this.mostrarBotonRegresar = true;
    this.mostrarCabecera = false;
    this.sumar();
  }

  verCuadro2() {
    this.mostrarPantallaPrincipal = false;
    this.mostrarCuadro2 = true;
    this.mostrarBotonRegresar = true;
    this.mostrarCabecera = false;
    this.ordenarEstudiantes();
  }

  verGrafico1() {
    this.mostrarPantallaPrincipal = false;
    this.mostrarGrafico1 = true;
    this.mostrarBotonRegresar = true;
    this.mostrarCabecera = false;
    this.sumar();
    this.llenarDatosGrafico();
    this.grafico();
    console.log(this.datosGrafico);
  }

  buscarVariable() {
    if (this.identificador1 == '0') {
      this.tipoDeTest = 0;
    } else {
      this.tipoDeTest = 1;
      this.mostrarParalelo = true;
    }
  }

  getEstudiantes() {
    this.buscarVariable();
    this.estServ.estadisticasEstudiantes(this.tipoDeTest, this.identificador3, this.identificador2)
      .subscribe(res => {
        this.estServ.estudiantes = res as Estudiante[];
        this.any = res as Estudiante[];
        this.listaGeneralEstudiantes = res as Estudiante[];
        console.log(res);
        console.log("El tamanio es " + this.any.length);
        this.estServ.selecionarEstudiante = res[this.any.length - 1];
        this.tamanio = this.any.length ;
        console.log('El lenght es:'+  this.tamanio);
        //console.log(this.estServ.selecionarEstudiante._id);
        //localStorage.setItem('identificador',this.estServ.selecionarEstudiante._id);
      });

  }

  irFormulario(texto : string){
    localStorage.setItem('identificador',texto);
    location.href = '/#/formulario';
  }

  imprimir() {
    if (window.print) {
      window.print();
    }
  }

  constructor(private estServ: EstudianteService) {
    console.log(
      '\nel tipo de test es:' + this.identificador1
      + '\nel tipo de anio es:' + this.identificador2
      + '\nel paralelo es:' + this.identificador3
    );

    this.getEstudiantes();
    this.datosIniciales();

  }
  grafico(){
    this.datosGrafico = {
      labels: this.titulo,
      datasets: [
        {
          label: 'Áreas Debilitadas',
          backgroundColor: '#82d4f5',
          borderColor: '#1f19e5',
          data: this.datosGrafico
        },

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
