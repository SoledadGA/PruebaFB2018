import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-tres-temporal',
  templateUrl: './area-tres-temporal.component.html',
  styleUrls: ['./area-tres-temporal.component.css']
})
export class AreaTresTemporalComponent implements OnInit {
  imagenCabecera = 'imagenes/area3T/CabeceraAreaTres.png';
  valor = 0;
  errorAudio = 'Tu navegador no implementa el elemento audio';

  mostrarEjemplo = true;
  nombreEjemplo = 'Orientación Temporal Ejemplo';
  queDiagnostica = 'Mide la orientación temporal';
  textoInstruccion = '¿Los niños van a la escuela de día o de noche?';
  audioInstruccion = 'audio/area3T/ejemplo.mp3';
  imagenEjemplo = ['imagenes/area3T/noche.png', 'imagenes/area3T/dia.jpg'];

  mostrarPreguntas = false;
  parteTitulo = 'Orientación Temporal';
  preguntas = ['¿En este momento es de día o de noche?', '¿Qué haces por las noches?',
    '¿Qué hiciste ayer en la escuela o en tu casa?', '¿Qué hiciste hoy?'];
  audio = ['audio/area3T/diaOnoche.mp3', 'audio/area3T/enLasNoches.mp3', 'audio/area3T/ayer.mp3', 'audio/area3T/hoy.mp3'];
  mostrarImagenes = false;
  respuestaPositiva = ['imagenes/area3T/dia.jpg', 'imagenes/area3T/dormir.png'];
  respuestaNegativa = ['imagenes/area3T/noche.png', 'imagenes/area3T/jugar.jpg'];

  mostrarRespuestas = false;
  respuesta = ['Positivo', 'Positivo', 'Positivo', 'Positivo'];

  iniciarPreguntas() {
    this.mostrarEjemplo = false;
    this.mostrarPreguntas = true;
    this.mostrarImagenes = true;
  }

  siguientePregunta(entrada: number) {
    if (this.valor + 1 == 2) {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Negativo';
        console.log(this.respuesta[this.valor]);
      }
      this.mostrarImagenes = false;
    }
    if (this.valor + 1 == 4){
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Negativo';
        console.log(this.respuesta[this.valor]);
      }
      this.mostrarPreguntas = false;
      this.mostrarRespuestas = true;
      this.mostrarImagenes = false;
    } else {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Negativo';
        console.log(this.respuesta[this.valor]);
      }
    }
    this.valor = this.valor + 1;
  }
  constructor() { }

  ngOnInit() {
  }

}
