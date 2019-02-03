import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-area-tres-temporal',
  templateUrl: './area-tres-temporal.component.html',
  styleUrls: ['./area-tres-temporal.component.css']
})
export class AreaTresTemporalComponent implements OnInit {

  valor = 0;
  errores = 0;
  mostrarEjemplo = true;
  mostrarPreguntas = false;
  mostrarImagenes = false;
  mostrarRespuestas = false;
  mostrarAreaPositiva = false;
  imagenCabecera = 'imagenes/cabeceras/CabeceraArea3.png';
  errorAudio = 'Tu navegador no implementa el elemento audio.';
  areaDebilitada = 'Se considera como área debilitada.';
  areaPositiva = 'Se considera como área positiva.';
  nombreEjemplo = 'Orientación Temporal - Ejemplo.';
  queDiagnostica = 'Mide la orientación temporal.';
  textoInstruccion = 'Los niños van a la escuela. ¿En el de día o en la noche?';
  parteTitulo = 'Orientación Temporal.';
  imagenEjemplo = [
    'imagenes/area3T/noche.png',
    'imagenes/area3T/dia.jpg'];
  preguntas = [
    'En este momento. ¿Es de día o es de noche?',
    '¿Qué haces por las noches?',
    '¿Qué hiciste ayer en la escuela o en tu casa?',
    '¿Qué hiciste hoy?'];
  respuestaPositiva = [
    'imagenes/area3T/dia.jpg',
    'imagenes/area3T/dormir.png'];
  respuestaNegativa = [
    'imagenes/area3T/noche.png',
    'imagenes/area3T/jugar.jpg'];
  audioInstruccion = 'audio/area3/instruccion.mp3';
  audio = [
    'audio/area3/1.mp3',
    'audio/area3/2.mp3',
    'audio/area3/3.mp3',
    'audio/area3/4.mp3'];
  respuesta = [];

  iniciarPreguntas() {
    this.mostrarEjemplo = false;
    this.mostrarPreguntas = true;
    this.mostrarImagenes = true;
  }

  siguientePregunta(entrada: number) {
    if (this.valor + 1 == 2) {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Negativo';
        this.errores = this.errores + 1;
        console.log(this.respuesta[this.valor]);
      } else {
        this.respuesta[this.valor] = 'Positivo';
      }
      this.mostrarImagenes = false;
    }
    if (this.valor + 1 == 4) {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Negativo';
        this.errores = this.errores + 1;
        console.log(this.respuesta[this.valor]);
      } else {
        this.respuesta[this.valor] = 'Positivo';
      }
      if (this.errores >= 1) {
        this.mostrarAreaPositiva = false;
      } else {
        this.mostrarAreaPositiva = true;
      }
      this.mostrarPreguntas = false;
      this.mostrarRespuestas = true;
      this.mostrarImagenes = false;
    } else {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Negativo';
        this.errores = this.errores + 1;
        console.log(this.respuesta[this.valor]);
      } else {
        this.respuesta[this.valor] = 'Positivo';
      }
    }
    this.valor = this.valor + 1;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
