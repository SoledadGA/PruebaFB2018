import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-siete',
  templateUrl: './area-siete.component.html',
  styleUrls: ['./area-siete.component.css']
})
export class AreaSieteComponent implements OnInit {
  imagenCabecera = 'imagenes/area7/CabeceraAreaSiete.png';
  valor = 0;
  errorAudio = 'Tu navegador no implementa el elemento audio';

  mostrarEjemplo = true;
  queDiagnostica = 'Diagnostica codificaciones y decodificaciones abstractas del estudiante.';
  instruccion = 'Completa la frase que yo quiero decir.';
  instruccion2 = 'El arroz es para comer, el agua es para';
  audioInstruccion = 'audio/area7/ejemplo.mp3';
  imagenEjemplo = ['imagenes/area7/comer.jpg', 'imagenes/area7/tomar.jpg'];

  mostrarPreguntas = false;
  preguntas = [
    'Un pájaro vuela en el aire, un pez nada en el', 'Un pan es para comer, la leche es para',
    'El humo sube, la lluvia', 'Yo me siento en una silla, tu duermes en una', 'El fuego significa calor, el hielo significa',
    'Yo como en un plato, tú tomas en una', 'Juan es un niño, María es una', 'Los oídos son para escuchar, los ojos son para',
    'Yo estoy despierto durante el día, tú estás dormido durante la', 'Un conejo es rápido, una tortuga es'];
  audio = [
    'audio/area7/diaOnoche.mp3', 'audio/area7/diaOnoche.mp3', 'audio/area7/diaOnoche.mp3', 'audio/area7/diaOnoche.mp3',
    'audio/area7/diaOnoche.mp3', 'audio/area7/diaOnoche.mp3', 'audio/area7/diaOnoche.mp3', 'audio/area7/diaOnoche.mp3',
    'audio/area7/diaOnoche.mp3', 'audio/area7/diaOnoche.mp3'];

  mostrarRespuestas = false;
  respuesta = [
    'Positivo', 'Positivo', 'Positivo', 'Positivo', 'Positivo',
    'Positivo', 'Positivo', 'Positivo', 'Positivo', 'Positivo',];

  iniciarPreguntas() {
    this.mostrarEjemplo = false;
    this.mostrarPreguntas = true;
  }

  siguientePregunta(entrada: number) {
    if (this.valor + 1 == 10){
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Negativo';
        console.log(this.respuesta[this.valor]);
      }
      this.mostrarPreguntas = false;
      this.mostrarRespuestas = true;
    } else {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Negativo';
        console.log(this.respuesta[this.valor]);
      } else {
        console.log(this.respuesta[this.valor]);
      }
    }
    this.valor = this.valor + 1;
  }
  constructor() { }

  ngOnInit() {
  }

}
