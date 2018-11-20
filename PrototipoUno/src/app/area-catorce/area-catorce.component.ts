import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-catorce',
  templateUrl: './area-catorce.component.html',
  styleUrls: ['./area-catorce.component.css']
})
export class AreaCatorceComponent implements OnInit {

  imagenCabecera = 'imagenes/cabeceras/CabeceraArea14.png';
  valor = 0;
  errores = 0;

  errorAudio = 'Tu navegador no implementa el elemento audio';

  mostrarDiagnostico = true;
  queDiagnostica = 'Diagnóstica discriminación auditiva.';

  mostrarPreguntas = true;
  instruccion = 'Escucha y repite después de mí';
  preguntas = [
    'pato - dato', 'cama - dama', 'caballo - cabello', 'rata - lata', 'hombre - hambre', 'mesa - misa',
    'mano - mono', 'tía - día', 'casa - pasa', 'pana - lana'];
  audio = [
    'audio/area14/diaOnoche.mp3', 'audio/area14/diaOnoche.mp3', 'audio/area14/diaOnoche.mp3', 'audio/area14/diaOnoche.mp3',
    'audio/area14/diaOnoche.mp3', 'audio/area14/diaOnoche.mp3', 'audio/area14/diaOnoche.mp3', 'audio/area14/diaOnoche.mp3',
    'audio/area14/diaOnoche.mp3', 'audio/area14/diaOnoche.mp3'];

  mostrarAreaPositiva = false;
  areaDebilitada = 'Se considera como área debilitada';
  areaPositiva = 'Se considera como área positiva';
  respuesta = ['Positivo', 'Positivo', 'Positivo', 'Positivo', 'Positivo', 'Positivo', 'Positivo', 'Positivo', 'Positivo',
    'Positivo'];

  siguientePregunta( entrada: number){
    this.mostrarDiagnostico=false;
    if (this.valor+1==10) {
      if (entrada==0){
        this.respuesta[this.valor]='Negativo';
        this.errores=this.errores+1;
        console.log(this.respuesta[this.valor]);
      }
      if (this.errores>=3){
        this.mostrarAreaPositiva = false;
      }else{
        this.mostrarAreaPositiva = true;
      }
      this.mostrarPreguntas=false;
    }else{
      if (entrada==0){
        this.respuesta[this.valor]='Negativo';
        this.errores=this.errores+1;
        console.log(this.errores);
      }
      this.valor=this.valor+1;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
