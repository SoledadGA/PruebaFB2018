import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estadisticas-free',
  templateUrl: './estadisticas-free.component.html',
  styleUrls: ['./estadisticas-free.component.css']
})
export class EstadisticasFreeComponent implements OnInit {


  imagenCabecera = 'imagenes/logo4.png';
  cabecera1 = 'UNIDAD EDUCATIVA MUNICIPAL EXPERIMENTAL “ANTONIO JOSÉ DE SUCRE”';
  cabecera2 = 'AÑO LECTIVO:';
  cabecera3 = 'RESULTADOS PRUEBA DE FUNCIONES BÁSICAS';
  cabecera4 = 'PARALELO';
  subtitulos = [
    'Cuadro No. 1. Evaluación Individual',
    'Gráfico No. 1. Errores Grupales Frecuentes',
    'Cuadro No. 2. Grupos de Trabajo'];

  constructor() { }

  ngOnInit() {
  }

}
