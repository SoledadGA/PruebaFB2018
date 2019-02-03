import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-area-catorce',
  templateUrl: './area-catorce.component.html',
  styleUrls: ['./area-catorce.component.css']
})
export class AreaCatorceComponent implements OnInit {

  valor = 0;
  errores = 0;
  mostrarDiagnostico = true;
  mostrarPreguntas = true;
  mostrarAreaPositiva = false;
  imagenCabecera = 'imagenes/cabeceras/CabeceraArea14.png';
  errorAudio = 'Tu navegador no implementa el elemento audio.';
  areaDebilitada = 'Se considera como área debilitada.';
  areaPositiva = 'Se considera como área positiva.';
  queDiagnostica = 'Diagnostica la discriminación auditiva.';
  queDiagnostica2 = 'El estudiante debe repetir las dos palabras juntas de cada ítem.';
  instruccion = '"Escucha y repite después de mí."';
  preguntas = [
    'pato - dato',
    'cama - dama',
    'caballo - cabello',
    'rata - lata',
    'hombre - hambre',
    'mesa - misa',
    'mano - mono',
    'tía - día',
    'casa - pasa',
    'pana - lana'];
  audio = [
    'audio/area14/instruccion-1.mp3',
    'audio/area14/2.mp3',
    'audio/area14/3.mp3',
    'audio/area14/4.mp3',
    'audio/area14/5.mp3',
    'audio/area14/6.mp3',
    'audio/area14/7.mp3',
    'audio/area14/8.mp3',
    'audio/area14/9.mp3',
    'audio/area14/10.mp3'];
  respuesta = [];

  siguientePregunta(entrada: number) {
    this.mostrarDiagnostico = false;
    if (this.valor + 1 == 10) {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Negativo';
        this.errores = this.errores + 1;
        console.log(this.respuesta[this.valor]);
      } else {
        this.respuesta[this.valor] = 'Positivo';
      }
      if (this.errores > 2) {
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
