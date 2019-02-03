import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-area-tres-espacial',
  templateUrl: './area-tres-espacial.component.html',
  styleUrls: ['./area-tres-espacial.component.css']
})
export class AreaTresEspacialComponent implements OnInit {

  valor = 0;
  errores = 0;
  mostrarIndicacion = true;
  mostrarSilla = true;
  mostrarSonido = true;
  mostrarAreaPositiva = false;
  cabecera = 'imagenes/cabeceras/CabeceraArea3.png';
  errorAudio = 'Tu navegador no implementa el elemento audio.';
  areaDebilitada = 'Se considera como área debilitada.';
  areaPositiva = 'Se considera como área positiva.';
  titulo = 'Orientación Espacial.';
  indicacion = 'Mide orientación espacial (arriba, debajo, adelante, detrás).';
  audio = [
    'audio/area3/5.mp3',
    'audio/area3/6.mp3',
    'audio/area3/7.mp3',
    'audio/area3/8.mp3'];
  instruccion = [
    'Señala la pelota que está arriba de la silla.',
    'Señala la pelota que está debajo de la silla.',
    'Señala la pelota que está adelante de la silla.',
    'Señala la pelota que está detrás de la silla.'];
  respuesta = [];

  siguiente(entrada: number) {
    this.mostrarIndicacion = false;
    if (this.valor + 1 == 4) {
      if (entrada != this.valor) {
        this.respuesta[this.valor] = 'Negativo';
        this.errores = this.errores + 1;
        console.log('negativo');
        this.mostrarSilla = false;
        this.mostrarSonido = false;
      } else {
        console.log('positivo');
        this.respuesta[this.valor] = 'Positivo';
        this.mostrarSilla = false;
        this.mostrarSonido = false;
      }
      if (this.errores > 1) {
        this.mostrarAreaPositiva = false;
      } else {
        this.mostrarAreaPositiva = true;
      }
    }
    if (entrada != this.valor) {
      this.respuesta[this.valor] = 'Negativo';
      this.errores = this.errores + 1;
      console.log('negativo');
    } else {
      this.respuesta[this.valor] = 'Positivo';
      console.log('positivo');
    }
    this.valor = this.valor + 1;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
