import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-cinco',
  templateUrl: './area-cinco.component.html',
  styleUrls: ['./area-cinco.component.css']
})
export class AreaCincoComponent implements OnInit {
  mostrarCriterio=true;
  contadorErrores=0;
  valor=0;
  criterio='Diagnostica la capacidad para escuchar una orden y codificarla en respuesta (Sí o No)';
  instruccion='"Ahora contestarás Sí o No"';
  audioInstruccion='aundio/area5/instruccion.mp3';
  preguntas=['¿Los pájaros comen?',
    '¿Los gatos vuelan?',
    '¿Los bebés lloran?',
    '¿Los árboles bailan?',
    '¿Los niños juegan?',
    '¿Los pájaros pintan?',
    '¿Los plátanos escriben?',
    '¿Las personas se casan?',
    '¿Las bicicletas estudian?',
    '¿Las mamás cocinan?',
    '¿El cielo es verde?',
    '¿El sol es caliente?',
    '¿Las flores comen?',
    '¿Los trenes duermen?',
    '¿Los sapos saltan?'];
  audio=['audio/area5/pregunta1.mp3',
    'audio/area5/pregunta2.mp3',
    'audio/area5/pregunta3.mp3',
    'audio/area5/pregunta4.mp3',
    'audio/area5/pregunta5.mp3',
    'audio/area5/pregunta6.mp3',
    'audio/area5/pregunta7.mp3',
    'audio/area5/pregunta8.mp3',
    'audio/area5/pregunta9.mp3',
    'audio/area5/pregunta10.mp3',
    'audio/area5/pregunta11.mp3',
    'audio/area5/pregunta12.mp3',
    'audio/area5/pregunta13.mp3',
    'audio/area5/pregunta14.mp3',
    'audio/area5/pregunta15.mp3',];
  respuesta=['positivo'];
  mostrarPreguntas=true;


  siguiente( entrada: number){
    this.mostrarCriterio=false;
    if (this.valor+1==15) {
      if (entrada==0){
        this.respuesta[this.valor]='Negativo';
        console.log(this.respuesta[this.valor]);
      }else{
        this.respuesta[this.valor]='Positivo';
      }
      this.mostrarPreguntas=false;
    }else{
      if (entrada==0){
        this.respuesta[this.valor]='Negativo';
        this.contadorErrores=this.contadorErrores+1;
        console.log(this.respuesta[this.valor]);
        this.valor=this.valor+1;
      }else {
        console.log(this.respuesta[this.valor]);
        this.respuesta[this.valor]='Positivo';
        this.valor=this.valor+1;
      }

    }
    if (this.contadorErrores==3){
      this.mostrarPreguntas=false;

    }

  }
  constructor() { }

  ngOnInit() {
  }

}
