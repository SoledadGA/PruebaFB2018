import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-area-dos',
  templateUrl: './area-dos.component.html',
  styleUrls: ['./area-dos.component.css']
})
export class AreaDosComponent implements OnInit {
  valor = 0;
  derecha = 0;
  izquierda = 4;
  mostrarEjemplo = true;
  mostrarPreguntas = false;
  mostrarAreaPositiva = false;
  mostrarRespuestas = false;
  cabecera = 'imagenes/cabeceras/CabeceraArea2.png';
  errorAudio = 'Tu navegador no implementa el elemento audio.';
  areaDebilitada = 'Se considera como área debilitada.';
  areaPositiva = 'Se considera como área positiva.';
  nombreEjemplo = 'Ejemplo.';
  imagenEjemplo = 'imagenes/area2/EjemploA2.jpg';
  queDiagnostica = 'Diagnostica la dominancia lateral, con una serie de actividades con el ojo, mano, oído y pie.';
  queDiagnostica2 = 'El estudiante deberá realizar las actividades según las instrucciones que se da en cada literal.';
  textoInstruccion = '"Mira a la niña contestar el teléfono. Ahora, mira los objetos que están en la mesa, ' +
    'con estos objetos harás lo siguiente."';
  parteTitulo = [
    'Ojo.',
    'Mano.',
    'Oído.',
    'Pie.'];
  preguntas = [
    'Mira por el tubo.',
    'Coge el lápiz y has un círculo.',
    'Coge el reloj y escucha si suena.',
    'Coge la pelota y patéala.'];
  audioInstrucciones = 'audio/area2/instruccion.mp3';
  audio = [
    'audio/area2/1.mp3',
    'audio/area2/2.mp3',
    'audio/area2/3.mp3',
    'audio/area2/4.mp3'];
  respuesta = [];

  iniciarPreguntas() {
    this.mostrarEjemplo = false;
    this.mostrarPreguntas = true;
  }

  siguientePregunta(entrada: number) {
    if (this.valor + 1 == 4) {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Izquierda';
        this.izquierda = this.izquierda - 1;
        // console.log(this.derecha + "izq");
      } else {
        this.respuesta[this.valor] = 'Derecha';
        // this.izquierda=this.izquierda-1;
        this.izquierda = this.izquierda + 1;
        this.derecha = this.derecha + 1;
        console.log(this.derecha);
      }
      if (this.derecha == 4) {
        this.mostrarAreaPositiva = true;
      } else {
        if (this.izquierda == 0) {
          this.mostrarAreaPositiva = true;
        }
      }
      this.mostrarPreguntas = false;
      this.mostrarRespuestas = true;
    } else {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Izquierda';
        this.izquierda = this.izquierda - 1;
        // console.log(this.errores + "izq");
      } else {
        this.respuesta[this.valor] = 'Derecha';
        this.izquierda = this.izquierda + 1;
        this.derecha = this.derecha + 1;
        console.log(this.derecha);
      }
      this.valor = this.valor + 1;
    }
  }

  constructor() {
  }

  ngOnInit() {
  }
}
