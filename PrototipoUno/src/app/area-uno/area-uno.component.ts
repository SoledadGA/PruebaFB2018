import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-area-uno',
  templateUrl: './area-uno.component.html',
  styleUrls: ['./area-uno.component.css']
})
export class AreaUnoComponent implements OnInit {

  numeroEjemplo = 0;
  valor = 0;
  errores = 0;
  erroresE = 0;
  erroresO = 0;
  mostrarEjemplo = true;
  propioCuerpo = false;
  espejo = false;
  otroCuerpo = false;
  grafica = false;
  mostrarAreaPositiva = false;
  cabecera = 'imagenes/cabeceras/CabeceraArea1.png';
  errorAudio = 'Tu navegador no implementa el elemento audio.';
  areaDebilitada = 'Se considera como área debilitada.';
  areaPositiva = 'Se considera como área positiva.';
  textoInstruccion = [
    '"Mira a los niños lo que hacen, ahora tu harás lo mismo."',
    '"Ahora señala en el espejo."',
    '"Ahora, harás lo mismo con otra persona."'];
  queDignostica = [
    'Diagnostica el conocimiento que tiene el estudiante del esquema corporal en su propio cuerpo.',
    'Diagnostica el conocimiento que tiene el estudiante del esquema corporal en su propio cuerpo frente a un espejo.',
    'Diagnostica el conocimiento que tiene el estudiante del esquema corporal en otra persona.'];
  nombreEjemplo = [
    'En su propio cuerpo - Ejemplo.',
    'En el espejo - Ejemplo.',
    'En otra persona - Ejemplo.'];
  instruccion = [
    'Se pide señalar las siguientes 4 partes finas (boca, ojos, nariz, dedo).',
    'Se pide señalar partes finas o gruesas (cabeza, manos, piernas, ojos).',
    'Se pide señalar las siguientes 4 partes gruesas (brazos, piernas, espalda, pecho).'];
  preguntasP = [
    'Señala tu nariz.',
    'Señala tus ojos.',
    'Señala tu boca.',
    'Señala tu dedo.'];
  preguntasE = [
    'Señala tu cabeza.',
    'Señala tus manos.',
    'Señala tus piernas.',
    'Señala tus ojos.'];
  preguntasO = [
    'Señala los brazos de la otra persona.',
    'Señala las piernas de la otra persona.',
    'Señala la espalda de la otra persona.',
    'Señala el pecho de la otra persona.'];
  imagenesEjemplo = [
    'imagenes/area1/propioCuerpo.gif',
    'imagenes/area1/espejo.png',
    'imagenes/area1/compa.jpeg'];
  estiloBotonEjemplo = [
    'sa-boton-ejemplo1',
    'sa-boton-ejemplo2',
    'sa-boton-ejemplo3'];
  audioInstrucciones = [
    'audio/area1/instruccion1.mp3',
    'audio/area1/instruccion2.mp3',
    'audio/area1/instruccion3.mp3'];
  audio = [
    'audio/area1/1-1.mp3',
    'audio/area1/1-2.mp3',
    'audio/area1/1-3.mp3',
    'audio/area1/1-4.mp3'];
  audioE = [
    'audio/area1/2-1.mp3',
    'audio/area1/2-2.mp3',
    'audio/area1/2-3.mp3',
    'audio/area1/2-4.mp3'];
  audioO = [
    'audio/area1/3-1.mp3',
    'audio/area1/3-2.mp3',
    'audio/area1/3-3.mp3',
    'audio/area1/3-4.mp3'];
  respuesta = [];
  respuestaE = [];
  respuestaO = [];


  iniciarPreguntas() {
    this.mostrarEjemplo = false;
    if (this.numeroEjemplo == 0) {
      this.propioCuerpo = true;
    }
    if (this.numeroEjemplo == 1) {
      this.espejo = true;
    }
    if (this.numeroEjemplo == 2) {
      this.otroCuerpo = true;
    }
    this.numeroEjemplo = this.numeroEjemplo + 1;
  }

  siguiente(entrada: number) {
    if (this.valor + 1 == 4) {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Negativo';
        console.log(this.respuesta[this.valor]);
        this.errores = this.errores + 1;
      } else {
        this.respuesta[this.valor] = 'Positivo';
      }
      this.valor = 0;
      this.mostrarEjemplo = true;
      this.propioCuerpo = false;
    } else {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Negativo';
        console.log(this.respuesta[this.valor]);
        this.valor = this.valor + 1;
        this.errores = this.errores + 1;
      } else {
        console.log(this.respuesta[this.valor]);
        this.respuesta[this.valor] = 'Positivo';
        this.valor = this.valor + 1;
      }
    }
  }

  siguiente1(entrada: number) {
    if (this.valor + 1 == 4) {
      if (entrada == 0) {
        this.respuestaE[this.valor] = 'Negativo';
        console.log(this.respuestaE[this.valor]);
        this.erroresE = this.erroresE + 1;
      } else {
        this.respuestaE[this.valor] = 'Positivo';
      }
      this.valor = 0;
      this.mostrarEjemplo = true;
      this.espejo = false;
    } else {
      if (entrada == 0) {
        this.respuestaE[this.valor] = 'Negativo';
        console.log(this.respuestaE[this.valor]);
        this.erroresE = this.erroresE + 1;
        this.valor = this.valor + 1;
      } else {
        this.respuestaE[this.valor] = 'Positivo';
        console.log(this.respuestaE[this.valor]);
        this.valor = this.valor + 1;
      }
    }
  }

  siguiente2(entrada: number) {
    if (this.valor + 1 == 4) {
      if (entrada == 0) {
        this.respuestaO[this.valor] = 'Negativo';
        console.log(this.respuestaO[this.valor]);
        this.erroresO = this.erroresO + 1;
      } else {
        this.respuestaO[this.valor] = 'Positivo';
      }
      if ((this.errores + this.erroresE + this.erroresO) > 3) {
        this.mostrarAreaPositiva = false;
      } else {
        this.mostrarAreaPositiva = true;
      }
      this.grafica = true;
      this.otroCuerpo = false;
    } else {
      if (entrada == 0) {
        this.respuestaO[this.valor] = 'Negativo';
        console.log(this.respuestaO[this.valor]);
        this.erroresO = this.erroresO + 1;
        this.valor = this.valor + 1;
      } else {
        this.respuestaO[this.valor] = 'Positivo';
        this.valor = this.valor + 1;
      }
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
