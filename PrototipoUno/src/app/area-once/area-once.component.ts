import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-area-once',
  templateUrl: './area-once.component.html',
  styleUrls: ['./area-once.component.css']
})
export class AreaOnceComponent implements OnInit {

  valor = 0;
  errores = 0;
  mostrarDiagnostico = true;
  mostrarPreguntas = true;
  mostrarBoton = false;
  mostrarAreaPositiva = false;
  imagenCabecera = 'imagenes/cabeceras/CabeceraArea11.png';
  errorAudio = 'Tu navegador no implementa el elemento audio.';
  areaDebilitada = 'Se considera como área debilitada.';
  areaPositiva = 'Se considera como área positiva.';
  queDiagnostica = 'Diagnóstico la memoria auditiva del estudiante.';
  instruccion = '"Escucha y repite después de mí."';
  explicacionBotonVerde = 'Si la respuesta es correcta y el estudiante tiene 5 años o menos, utilizar el botón verde.' +
    ' Caso contrario, si la respuesta es incorrecta dar clic en el botón Negativo y continuar con la prueba.';
  preguntas = [
    '3 - 2 - 5',
    '2 - 5 - 1',
    '7 - 6 - 2 - 4',
    '1 - 3 - 5 - 2',
    '7 - 4 - 1 - 3 - 2',
    '2 - 5 - 4 - 6 - 9',
    '3 - 2 - 5 - 7 - 8 - 3',
    '9 - 2 - 6 - 7 - 5 - 8',
    '2 - 4 - 6 - 3 - 2 - 5 - 7',
    '5 - 4 - 7 - 9 - 7 - 6 - 2 - 3'];
  audio = [
    'audio/area11/instruccion-1.mp3',
    'audio/area11/instruccion-2.mp3',
    'audio/area11/instruccion-3.mp3',
    'audio/area11/instruccion-4.mp3',
    'audio/area11/instruccion-5.mp3',
    'audio/area11/instruccion-6.mp3',
    'audio/area11/instruccion-7.mp3',
    'audio/area11/instruccion-8.mp3',
    'audio/area11/instruccion-9.mp3',
    'audio/area11/instruccion-10.mp3'];
  respuesta = [];

  siguientePregunta(entrada: number) {
    this.mostrarDiagnostico = false;
    if (this.valor + 1 != 5) {
      this.mostrarBoton = false;
    }
    if (this.valor + 1 >= 9) {
      if (entrada == 1) {
        this.respuesta[this.valor] = 'Positivo';
        this.valor = this.valor + 1;
        console.log('Entré al if');
        if (this.valor + 1 == 11) {
          if (entrada == 1) {
            // this.respuesta[this.valor] = 'Positivo';
            this.mostrarAreaPositiva = true;
          } else {
            this.respuesta[this.valor] = 'Negativo';
            this.mostrarAreaPositiva = false;
          }
          this.mostrarPreguntas = false;
        }
      } else {
        this.respuesta[this.valor] = 'Negativo';
        this.mostrarPreguntas = false;
      }
    } else {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Negativo';
        this.valor = this.valor + 1;
        this.errores = this.errores + 1;
      } else {
        if (this.errores == 1) {
          this.respuesta[this.valor] = 'Positivo';
          this.valor = this.valor + 1;
          if (this.valor + 1 == 5) {
            this.mostrarBoton = true;
          }
        } else {
          this.respuesta[this.valor] = 'Positivo';
          this.respuesta[this.valor + 1] = 'Positivo';
          this.valor = this.valor + 2;
          if (this.valor + 1 == 5) {
            this.mostrarBoton = true;
          }
          if (this.valor + 1 > 5) {
            this.mostrarBoton = false;
          }
        }
        this.errores = 0;
      }
    }
    if (this.errores == 2) {
      this.mostrarPreguntas = false;
      this.mostrarBoton = false;
      this.mostrarAreaPositiva = false;
    }
  }

  botonAreaPositiva() {
    this.respuesta[this.valor] = 'Positivo';
    this.mostrarAreaPositiva = true;
    this.mostrarPreguntas = false;
    this.mostrarDiagnostico = false;
    this.mostrarBoton = false;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
