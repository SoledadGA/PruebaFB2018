import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-area-diez',
  templateUrl: './area-diez.component.html',
  styleUrls: ['./area-diez.component.css']
})
export class AreaDiezComponent implements OnInit {

  valor = 0;
  errores = 0;
  mostrarDiagnostico = true;
  mostrarPreguntas = true;
  mostrarAreaPositiva = false;
  imagenCabecera = 'imagenes/cabeceras/CabeceraArea10.png';
  errorAudio = 'Tu navegador no implementa el elemento audio.';
  areaDebilitada = 'Se considera como área debilitada.';
  areaPositiva = 'Se considera como área positiva.';
  queDiagnostica = 'Diagnostica la pronunciación  con palabras cuyo esquema mental está estucturado.';
  instruccion = '"Escucha y repite después de mí."';
  preguntas = [
    'Franela',
    'Esferográfico',
    'Triciclo',
    'Lengua',
    'Periódico',
    'Columpio'];
  audio = [
    'audio/area10/instruccion-1.mp3',
    'audio/area10/2.mp3',
    'audio/area10/3.mp3',
    'audio/area10/4.mp3',
    'audio/area10/5.mp3',
    'audio/area10/6.mp3'];
  respuesta = [];

  siguientePregunta(entrada: number) {
    this.mostrarDiagnostico = false;
    if (this.valor + 1 == 6) {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Negativo';
        this.errores = this.errores + 1;
        console.log(this.respuesta[this.valor]);
      } else {
        this.respuesta[this.valor] = 'Positivo';
      }
      if (this.errores > 0) {
        this.mostrarAreaPositiva = false;
      } else {
        this.mostrarAreaPositiva = true;
      }
      this.mostrarPreguntas = false;
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
