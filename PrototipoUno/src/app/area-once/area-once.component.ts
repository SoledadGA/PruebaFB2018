import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-once',
  templateUrl: './area-once.component.html',
  styleUrls: ['./area-once.component.css']
})
export class AreaOnceComponent implements OnInit {
  imagenCabecera = 'imagenes/cabeceras/CabeceraArea11.png';
  valor = 0;
  errores = 0;

  errorAudio = 'Tu navegador no implementa el elemento audio';

  mostrarDiagnostico = true;
  queDiagnostica = 'Diagnóstico la memoria auditiva del estudiante.';

  mostrarPreguntas = true;
  instruccion = 'Escucha y repite después de mí';
  preguntas = [
    '3 - 2 - 5', '2 - 5 - 1', '7 - 6 - 2 - 4', '1 - 3 - 5 - 2', '7 - 4 - 1 - 3 - 2', '2 - 5 - 4 - 6 - 9',
    '3 - 2 - 5 - 7 - 8 - 3', '9 - 2 - 6 - 7 - 5 - 8', '2 - 4 - 6 - 3 - 2 - 5 - 7', '5 - 4 - 7 - 9 - 7 - 6 - 2 - 3'];
  audio = [
    'audio/area11/diaOnoche.mp3', 'audio/area11/diaOnoche.mp3', 'audio/area11/diaOnoche.mp3', 'audio/area11/diaOnoche.mp3',
    'audio/area11/diaOnoche.mp3', 'audio/area11/diaOnoche.mp3', 'audio/area11/diaOnoche.mp3', 'audio/area11/diaOnoche.mp3',
    'audio/area11/diaOnoche.mp3', 'audio/area11/diaOnoche.mp3'];

  mostrarBoton=false;
  mostrarAreaPositiva = false;
  areaDebilitada = 'Se considera como área debilitada';
  areaPositiva = 'Se considera como área positiva';
  respuesta = ['Positivo'];

  siguientePregunta(entrada: number) {
    this.mostrarDiagnostico = false;
    if(this.valor+1==4){
      this.mostrarBoton=true;
    }

    if(this.valor+1==6){
      this.mostrarBoton=false;
    }

    if (this.valor+1>=9){
      if (entrada == 1) {
        this.respuesta[this.valor] = 'Positivo';
        this.valor = this.valor + 1;
        console.log('Entré al if');
        if(this.valor+1==11){
          if (entrada == 1) {
            this.respuesta[this.valor] = 'Positivo';
            this.mostrarAreaPositiva=true;
          } else {
            this.respuesta[this.valor] = 'Negativo';
            this.mostrarAreaPositiva=false;
          }
          this.mostrarPreguntas = false;
        }
      } else {
        this.respuesta[this.valor] = 'Negativo';
        this.mostrarPreguntas = false;
      }
    } else {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Negativo';
        this.valor = this.valor + 1;
        this.errores = this.errores + 1;
      } else {
        if(this.errores==1){
          this.respuesta[this.valor]='Positivo';
          this.valor=this.valor+1;
        }else{
          this.respuesta[this.valor]='Positivo';
          this.respuesta[this.valor+1]='Positivo';
          this.valor=this.valor+2;
        }
        this.errores=0;
      }
    }

    if(this.errores==2){
      this.mostrarPreguntas=false;
      this.mostrarBoton=false;
      this.mostrarAreaPositiva=false;
    }
  }

  botonAreaPositiva(){
    this.respuesta[this.valor]='Positivo';
    this.mostrarAreaPositiva=true;
    this.mostrarPreguntas=false;
    this.mostrarDiagnostico=false;
    this.mostrarBoton=false;
  }

  constructor() { }

  ngOnInit() {
  }

}
