import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-area-doce',
  templateUrl: './area-doce.component.html',
  styleUrls: ['./area-doce.component.css']
})
export class AreaDoceComponent implements OnInit {

  valor = 0;
  errores = 0;
  mostrarDiagnostico = true;
  mostrarPreguntas = true;
  mostrarBoton = false;
  mostrarAreaPositiva = false;
  imagenCabecera = 'imagenes/cabeceras/CabeceraArea12.png';
  errorAudio = 'Tu navegador no implementa el elemento audio.';
  areaDebilitada = 'Se considera como área debilitada.';
  areaPositiva = 'Se considera como área positiva.';
  queDiagnostica = 'Diagnostica la coordinacipon visual auditiva motora, con patrón visual y auditivo.';
  instruccion = 'Mira, escucha y repite después de mí.';
  explicacionBotonVerde = 'Si la respuesta es correcta y el estudiante tiene 5 años o menos, utilizar el botón verde.' +
    ' Caso contrario, si la respuesta es incorrecta dar clic en el botón Negativo y continuar con la prueba.';
  preguntas = [
    '000',
    '00 – 00 ',
    '000 – 00',
    '00 – 0 – 000 ',
    '0 – 000 – 0',
    '0 – 00 – 00 – 000',
    '00 – 000 – 000 – 0000'];
  audio = [
    'audio/area12/1.mp4',
    'audio/area12/2.mp4',
    'audio/area12/3.mp4',
    'audio/area12/4.mp4',
    'audio/area12/5.mp4',
    'audio/area12/6.mp4',
    'audio/area12/7.mp4',];
  respuesta = [];

  siguientePregunta(entrada: number) {
    this.mostrarDiagnostico = false;
    if (this.valor + 1 == 4) {
      this.mostrarBoton = true;
    } else {
      this.mostrarBoton = false;
    }
    if (this.valor + 1 == 7) {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Negativo';
        this.errores = this.errores + 1;
        console.log(this.respuesta[this.valor]);
      } else {
        this.respuesta[this.valor] = 'Positivo';
      }
      if (this.errores >= 3) {
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
    if (this.errores == 1) {
      this.mostrarPreguntas = false;
      this.mostrarBoton = false;
      this.mostrarAreaPositiva = false;
    }
  }

  considerarPositivo() {
    this.mostrarAreaPositiva = true;
    this.mostrarPreguntas = false;
    this.mostrarBoton = false;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
