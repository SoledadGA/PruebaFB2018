import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-area-cuatro',
  templateUrl: './area-cuatro.component.html',
  styleUrls: ['./area-cuatro.component.css']
})
export class AreaCuatroComponent implements OnInit {

  valor = 0;
  errores = 0;
  mostrarPreguntas = true;
  mostrarAreaPositiva = false;
  cabecera = 'imagenes/cabeceras/CabeceraArea4.png';
  errorAudio = 'Tu navegador no implementa el elemento audio.';
  areaDebilitada = 'Se considera como área debilitada.';
  areaPositiva = 'Se considera como área positiva.';
  instruccion = [
    'Salta en un solo pie.',
    'Botea la pelota con una mano.'];
  criterio = [
    'No se admite zig-zag.',
    'No se admite zig-zag, ni sobre boteo.'];
  audio = [
    'audio/area4/1.mp3',
    'audio/area4/2.mp3'];
  imagenes = [
    'imagenes/area4/saltar.jpg',
    'imagenes/area4/ninoPelota.png'];
  respuesta = [];

  siguiente(entrada: number) {
    if (this.valor + 1 == 2) {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Negativo';
        console.log(this.respuesta[this.valor]);
        this.errores = this.errores + 1;
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
        console.log(this.respuesta[this.valor]);
        this.errores = this.errores + 1;
        this.valor = this.valor + 1;
      } else {
        this.respuesta[this.valor] = 'Positivo';
        console.log(this.respuesta[this.valor]);
        this.valor = this.valor + 1;
      }
    }

  }

  constructor() {
  }

  ngOnInit() {
  }

}
