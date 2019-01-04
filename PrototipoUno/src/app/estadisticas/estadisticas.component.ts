import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  valor = 0;
  porcentajes = 0;
  negativos = 0;
  anioLectivo = 2017;
  imagenCabecera = 'imagenes/logo4.png';
  cabecera1 = 'UNIDAD EDUCATIVA MUNICIPAL EXPERIMENTAL “ANTONIO JOSÉ DE SUCRE”';
  cabecera2 = 'AÑO LECTIVO:';
  cabecera3 = 'RESULTADOS PRUEBA DE FUNCIONES BÁSICAS';
  datosGrafico: any;
  opcionesGrafico: any;
  subtitulos = [
    'Cuadro No. 1. Evaluación Individual',
    'Gráfico No. 1. Errores Grupales Frecuentes',
    'Cuadro No. 2. Grupos de Trabajo'];
  cabeceraTabla: string[] = [
    'No.',
    'Nómina',
    'Áreas Examinadas',
    'Total Aciertos',
    'Total Errores'];
  cabeceraAreasTabla = [
    'I', 'II', 'III', 'IV', 'V', 'VI',
    'VII', 'VIII', 'IX', 'X', 'XI', 'XII',
    'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'T', 'E'];
  pieTabla = [
    'Total Aciertos',
    'Porcentaje Aciertos',
    'Total Errores',
    'Porcentaje Errores'];
  nomina = [
    'Tania Soledad Gallardo Andrade', 'nombre2', 'nombre3', 'nombre4', 'nombre5', 'nombre6',
    'nombre7', 'nombre8', 'nombre9', 'nombre10', 'nombre11', 'nombre12',
    'nombre13', 'nombre14', 'nombre15', 'nombre16', 'nombre17', 'nombre18', 'nombre19'];
  datos = [
    '1',
    'Tania Soledad Gallardo Andrade',
    '+', '+', '+',
    '+', '+', '+',
    '+', '+', '+',
    '+', '+', '+',
    '+', '+', '+',
    '+', '+', '+', 18, 0];
  estiloTabla = [
    'estilo1', 'estilo2', 'estilo3', 'estilo3', 'estilo3', 'estilo3',
    'estilo3', 'estilo3', 'estilo3', 'estilo3', 'estilo3', 'estilo3',
    'estilo3', 'estilo3', 'estilo3', 'estilo3', 'estilo3', 'estilo3',
    'estilo3', 'estilo3', 'estilo3', 'estilo4', 'estilo4'];
  valoresAfirmativos = [
    1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12,
    13, 14, 15, 16, 17, 18];
  porcentajesAfirmativos = [
    this.porcentaje(0, this.valoresAfirmativos),
    this.porcentaje(1, this.valoresAfirmativos),
    this.porcentaje(2, this.valoresAfirmativos),
    this.porcentaje(3, this.valoresAfirmativos),
    this.porcentaje(4, this.valoresAfirmativos),
    this.porcentaje(5, this.valoresAfirmativos),
    this.porcentaje(6, this.valoresAfirmativos),
    this.porcentaje(7, this.valoresAfirmativos),
    this.porcentaje(8, this.valoresAfirmativos),
    this.porcentaje(9, this.valoresAfirmativos),
    this.porcentaje(10, this.valoresAfirmativos),
    this.porcentaje(11, this.valoresAfirmativos),
    this.porcentaje(12, this.valoresAfirmativos),
    this.porcentaje(13, this.valoresAfirmativos),
    this.porcentaje(14, this.valoresAfirmativos),
    this.porcentaje(15, this.valoresAfirmativos),
    this.porcentaje(16, this.valoresAfirmativos),
    this.porcentaje(17, this.valoresAfirmativos)];
  valoresNegativos = [
    this.calcularNegativos(this.valoresAfirmativos, 0),
    this.calcularNegativos(this.valoresAfirmativos, 1),
    this.calcularNegativos(this.valoresAfirmativos, 2),
    this.calcularNegativos(this.valoresAfirmativos, 3),
    this.calcularNegativos(this.valoresAfirmativos, 4),
    this.calcularNegativos(this.valoresAfirmativos, 5),
    this.calcularNegativos(this.valoresAfirmativos, 6),
    this.calcularNegativos(this.valoresAfirmativos, 7),
    this.calcularNegativos(this.valoresAfirmativos, 8),
    this.calcularNegativos(this.valoresAfirmativos, 9),
    this.calcularNegativos(this.valoresAfirmativos, 10),
    this.calcularNegativos(this.valoresAfirmativos, 11),
    this.calcularNegativos(this.valoresAfirmativos, 12),
    this.calcularNegativos(this.valoresAfirmativos, 13),
    this.calcularNegativos(this.valoresAfirmativos, 14),
    this.calcularNegativos(this.valoresAfirmativos, 15),
    this.calcularNegativos(this.valoresAfirmativos, 16),
    this.calcularNegativos(this.valoresAfirmativos, 17)];
  porcentajesNegativo = [
    this.porcentaje(0, this.valoresNegativos),
    this.porcentaje(1, this.valoresNegativos),
    this.porcentaje(2, this.valoresNegativos),
    this.porcentaje(3, this.valoresNegativos),
    this.porcentaje(4, this.valoresNegativos),
    this.porcentaje(5, this.valoresNegativos),
    this.porcentaje(6, this.valoresNegativos),
    this.porcentaje(7, this.valoresNegativos),
    this.porcentaje(8, this.valoresNegativos),
    this.porcentaje(9, this.valoresNegativos),
    this.porcentaje(10, this.valoresNegativos),
    this.porcentaje(11, this.valoresNegativos),
    this.porcentaje(12, this.valoresNegativos),
    this.porcentaje(13, this.valoresNegativos),
    this.porcentaje(14, this.valoresNegativos),
    this.porcentaje(15, this.valoresNegativos),
    this.porcentaje(16, this.valoresNegativos),
    this.porcentaje(17, this.valoresNegativos)];

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
    console.log(this.porcentajes);
    return this.porcentajes.toFixed(2);
  }

  calcularNegativos(arreglo, entrada: number) {
    this.negativos = this.nomina.length - this.valoresAfirmativos[entrada];
    return this.negativos;
  }

  imprimir() {
    if (window.print) {
      window.print();
    }
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
          backgroundColor: '#7ff577',
          borderColor: '#3de539',
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
