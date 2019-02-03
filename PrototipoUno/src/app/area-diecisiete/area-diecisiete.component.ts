import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-diecisiete',
  templateUrl: './area-diecisiete.component.html',
  styleUrls: ['./area-diecisiete.component.css']
})
export class AreaDiecisieteComponent implements OnInit {
  contador_segundos_uno = 60;
  contador_segundos_dos = 60;
  mosatrar_alarma_uno = true;
  mosatrar_alarma_dos = false;
  sonar_alarma_dos = false;
  sonar_alarma_uno = false;
  mostrar_boton_alarma_uno = true;
  mostrar_boton_alarma_dos = true;
  imagen_cronometro = 'imagenes/area16/cronometro.png';
  valor = 0;
  errores = 0;
  mostrarDiagnostico = true;
  alarma = 'audio/area16/alarma.mpeg';
  mostrarPreguntas = true;
  mostrarAreaPositiva = false;
  imagenCabecera = 'imagenes/cabeceras/CabeceraArea17.png';
  errorAudio = 'Tu navegador no implementa el elemento audio';
  areaDebilitada = 'Se considera como área debilitada';
  areaPositiva = 'Se considera como área positiva';
  queDiagnostica = 'Diagnostica la motricidad fina.';
  queDiagnostica2 = 'Se considera positivo si corta más del 50% de la figura.';
  instruccion = 'Recorta lo más rápido que puedas la siguiente figura, siguiendo la línea.';
  preguntas = [
    'imagenes/area17/1.png',
    'imagenes/area17/2.png'];
  dibujos = [
    'Recorte 1',
    'Recorte 2'];
  audio = [
    'audio/area17/1.mp3',
    'audio/area17/2.mp3'];
  respuesta = [];
  contador = 0;

  siguientePregunta(entrada: number) {
    this.mostrarDiagnostico = false;
    this.mosatrar_alarma_uno = false;
    if (this.contador == 0){
      this.mosatrar_alarma_dos = true;
      this.contador = this.contador + 1;
    }
    if (this.valor + 1 == 2) {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Negativo';
        this.errores = this.errores + 1;
        console.log(this.respuesta[this.valor]);
      } else {
        this.respuesta[this.valor] = 'Positivo';
      }
      if (this.errores >= 1) {
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

  cronometro1() {
    this.mostrar_boton_alarma_uno = false;
    window.setInterval(
      () => {
        this.contador_segundos_uno = this.contador_segundos_uno - 1;
        if (this.contador_segundos_uno == 0) {
          this.sonar_alarma_uno = true;
          this.mosatrar_alarma_uno = false;
        }
      },
      1000);
  }

  cronometro2() {
    this.mostrar_boton_alarma_dos = false;
    window.setInterval(
      () => {
        this.contador_segundos_dos = this.contador_segundos_dos - 1;
        if (this.contador_segundos_dos == 0) {
          this.sonar_alarma_dos = true;
          this.mosatrar_alarma_dos = false;
        }
      },
      1000);
  }
  constructor() { }

  ngOnInit() {
  }

}
