import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-nueve',
  templateUrl: './area-nueve.component.html',
  styleUrls: ['./area-nueve.component.css']
})
export class AreaNueveComponent implements OnInit {
  imagenCabecera = 'imagenes/cabeceras/CabeceraArea9.png';
  valor = 0;
  errores = 0;

  errorAudio = 'Tu navegador no implementa el elemento audio';

  mostrarDiagnostico = true;
  queDiagnostica = 'Diagnóstica discriminación auditiva.';

  mostrarPreguntas = true;
  instruccion = 'Escucha y completa la palabra que quiero decir';
  preguntas = ['Lavado...',
    'Cepi...',
    'Maripo...',
    'Ara...',
    'Pelo...'];
  audio = [
    'audio/area9/instruccion-1.mp3',
    'audio/area9/2.mp3',
    'audio/area9/3.mp3',
    'audio/area9/4.mp3',
    'audio/area9/5.mp3'];
  mostrarAreaPositiva = false;
  areaDebilitada = 'Se considera como área debilitada';
  areaPositiva = 'Se considera como área positiva';
  respuesta = ['Positivo', 'Positivo', 'Positivo', 'Positivo', 'Positivo'];

  siguientePregunta( entrada: number){
    this.mostrarDiagnostico=false;
    if (this.valor+1==5) {
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
