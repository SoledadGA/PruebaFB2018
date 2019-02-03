import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-area-nueve',
  templateUrl: './area-nueve.component.html',
  styleUrls: ['./area-nueve.component.css']
})
export class AreaNueveComponent implements OnInit {

  valor = 0;
  errores = 0;
  mostrarEjemplo = true;
  mostrarPreguntas = false;
  mostrarRespuestas = false;
  mostrarAreaPositiva = false;
  imagenCabecera = 'imagenes/cabeceras/CabeceraArea9.png';
  errorAudio = 'Tu navegador no implementa el elemento audio.';
  areaDebilitada = 'Se considera como área debilitada.';
  areaPositiva = 'Se considera como área positiva.';
  queDiagnostica = 'Diagnóstica discriminación auditiva.';
  instruccion = '"Escucha y completa la palabra que quiero decir."';
  instruccion2 = 'Computado..';
  nombreEjemplo = 'Ejemplo.';
  imagenEjemplo = 'imagenes/area9/1.png';
  audioInstruccion = 'audio/area9/instruccion0.mp3';
  preguntas = [
    'Lavado..',
    'Cepi...',
    'Maripo..',
    'Ara..',
    'Pelo..'];
  audio = [
    'audio/area9/1.mp3',
    'audio/area9/2.mp3',
    'audio/area9/3.mp3',
    'audio/area9/4.mp3',
    'audio/area9/5.mp3'];
  respuesta = [];

  iniciarPreguntas() {
    this.mostrarEjemplo = false;
    this.mostrarPreguntas = true;
    this.mostrarRespuestas = false;
  }

  siguientePregunta(entrada: number) {
    if (this.valor + 1 == 5) {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Negativo';
        this.errores = this.errores + 1;
        console.log(this.respuesta[this.valor]);
      } else {
        this.respuesta[this.valor] = 'Positivo';
      }
      if (this.errores > 1) {
        this.mostrarAreaPositiva = false;
      } else {
        this.mostrarAreaPositiva = true;
      }
      this.mostrarPreguntas = false;
      this.mostrarRespuestas = true;
    } else {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Negativo';
        this.errores = this.errores + 1;
        console.log(this.errores);
      } else {
        this.respuesta[this.valor] = 'Positivo';
      }
      this.valor = this.valor + 1;
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
