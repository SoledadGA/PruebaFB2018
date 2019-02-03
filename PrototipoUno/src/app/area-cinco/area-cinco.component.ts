import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-cinco',
  templateUrl: './area-cinco.component.html',
  styleUrls: ['./area-cinco.component.css']
})
export class AreaCincoComponent implements OnInit {
  errores = 0;
  valor = 0;
  mostrarCriterio = true;
  mostrarPreguntas = true;
  mostrarAreaPositiva = false;
  cabecera = 'imagenes/cabeceras/CabeceraArea5.png';
  errorAudio = 'Tu navegador no implementa el elemento audio.';
  areaDebilitada = 'Se considera como área debilitada.';
  areaPositiva = 'Se considera como área positiva.';
  criterio = 'Diagnostica la capacidad para escuchar una orden y codificarla en respuesta (Sí o No).';
  instruccion = '"Ahora contestarás Sí o No."';
  preguntas = [
    '¿Los pájaros comen?',
    '¿Los gatos vuelan?',
    '¿Los bebés lloran?',
    '¿Los árboles bailan?',
    '¿Los niños juegan?',
    '¿Los pájaros pintan?',
    '¿Los plátanos escriben?',
    '¿Las personas se casan?',
    '¿Las bicicletas estudian?',
    '¿Las mamás cocinan?',
    '¿El cielo es verde?',
    '¿El sol es caliente?',
    '¿Las flores comen?',
    '¿Los trenes duermen?',
    '¿Los sapos saltan?'];
  audio = [
    'audio/area5/instruccion-1.mp3',
    'audio/area5/2.mp3',
    'audio/area5/3.mp3',
    'audio/area5/4.mp3',
    'audio/area5/5.mp3',
    'audio/area5/6.mp3',
    'audio/area5/7.mp3',
    'audio/area5/8.mp3',
    'audio/area5/9.mp3',
    'audio/area5/10.mp3',
    'audio/area5/11.mp3',
    'audio/area5/12.mp3',
    'audio/area5/13.mp3',
    'audio/area5/14.mp3',
    'audio/area5/15.mp3'];
  respuestaCorrectas = [
    'Si',
    'No',
    'Si',
    'No',
    'Si',
    'No',
    'No',
    'Si',
    'No',
    'Si',
    'No',
    'Si',
    'No',
    'No',
    'Si'];
  respuesta = [];

  siguiente(entrada: string) {
    this.mostrarCriterio = false;
    if (this.valor + 1 == 15) {
      console.log(this.respuestaCorrectas[this.valor]);
      if (entrada.localeCompare(this.respuestaCorrectas[this.valor])) {
        this.respuesta[this.valor] = 'Negativo';
        console.log(this.respuestaCorrectas[this.valor]);
        this.errores = this.errores + 1;
      } else {
        this.respuesta[this.valor] = 'Positivo';
      }
      this.mostrarPreguntas = false;
    } else {
      if (entrada.localeCompare(this.respuestaCorrectas[this.valor])) {
        this.respuesta[this.valor] = 'Negativo';
        this.errores = this.errores + 1;
        console.log(this.respuesta[this.valor]);
        this.valor = this.valor + 1;
      } else {
        console.log(this.respuesta[this.valor]);
        this.respuesta[this.valor] = 'Positivo';
        this.valor = this.valor + 1;
      }
    }
    if (this.errores > 2) {
      this.mostrarPreguntas = false;
      this.mostrarAreaPositiva = false;
    } else {
      this.mostrarAreaPositiva = true;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
