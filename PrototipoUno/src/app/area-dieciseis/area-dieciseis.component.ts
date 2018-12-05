import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-dieciseis',
  templateUrl: './area-dieciseis.component.html',
  styleUrls: ['./area-dieciseis.component.css']
})
export class AreaDieciseisComponent implements OnInit {
  imagenCabecera = 'imagenes/cabeceras/CabeceraArea16.png';
  contador_segundos = 60;
  mostrar_mensaje = false;
  indicacion = 'Diagnóstica atención y fatiga. Esta área se puede realizar tanto' +
    ' en la computadora como en el papel, queda a criterio del evaluador.';
  mostrar_botones_cronometro = true;
  mensaje = 'Se termino el tiempo';
  mostrar_ejemplo = true;
  recorrer = 0;
  recorrerE = 0;
  arreglo = [];
  arreglo1 = [];
  texto_ejemplo = 'Mira y pon un punto en cada cuadro lo más rápido que puedas';
  audio = 'audio/area16/instruccion.mp3';
  mostrar_ejercicio_en_computadora = false;
  mostrar_ejercicio_en_papel = false;
  elegir_opcion = false;
  mostrar_respuesta = false;
  resultados = 'Resultados';
  cronometro_iniciado = false;
  respuesta_computadora = false;
  mostrar_respuesta_papel = false;
  respuesta_papel = 'Area Positiva';
  mensaje_papel = 'Diagnóstica atención y fatiga.\n' +
    'De izquierda a derecha y de arriba hacia abajo.\n' +
    'No se admite que haga bombas o rallas, además no debe saltarse cuadros.';
  siguientePregunta(numero: number) {
    this.mostrar_respuesta = true;
    this.mostrar_ejercicio_en_papel = false;
    this.mostrar_respuesta_papel = true;
    if (numero == 1){
      this.respuesta_papel = 'Area Positiva';
    } else {
      this.respuesta_papel = 'Area Negativa';
    }
  }
  terminar_ejemplo() {
    this.mostrar_ejemplo = false;
    this.elegir_opcion = true;
  }
  prueba_en_computadora() {
    this.elegir_opcion = false;
    this.mostrar_ejercicio_en_computadora = true;
  }
  prueba_en_papel() {
    this.elegir_opcion = false;
    this.mostrar_ejercicio_en_papel = true;
  }
  funcionClic(posicion: number ) {
    if (this.recorrer + 1 == 1){
      if(!this.cronometro_iniciado){
        alert('Iniciar el Cronometro');
      }
    }
    if (this.recorrer + 1 == 50){
      this.mostrar_ejercicio_en_computadora = false;
      this.mostrar_respuesta = true;
    }
    if (this.recorrer + 1 == posicion) {
      this.arreglo[this.recorrer] = '.';
      this.recorrer = this.recorrer + 1;
    }
  }
  funcionClicE(posicion: number ) {
    if (this.recorrerE + 1 == posicion) {
      this.arreglo1[this.recorrerE] = '.';
      this.recorrerE = this.recorrerE + 1;
    }
  }
  cargar() {
    this.mostrar_botones_cronometro = false;
    this.cronometro_iniciado = true;
    this.respuesta_computadora = true;
    window.setInterval(
      () => {
        this.contador_segundos = this.contador_segundos - 1;
        if (this.contador_segundos ==  0) {
          this.mostrar_mensaje = true;
          this.mostrar_ejercicio_en_computadora = false;
          this.mostrar_respuesta = true;
          this.respuesta_papel = 'Area Negativa';
        }
      },
      1000);
  }

  constructor() { }

  ngOnInit() {
  }

}
