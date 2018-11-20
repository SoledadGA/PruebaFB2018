import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-ocho',
  templateUrl: './area-ocho.component.html',
  styleUrls: ['./area-ocho.component.css']
})
export class AreaOchoComponent implements OnInit {
  cabecera='imagenes/cabeceras/CabeceraArea8.png';
  mostrarCriterio=true;
  mostrarRespuesta=false;
  contadorErrores=0;
  valor=0;
  criterio='Diagnostica como se expresa el estudiante en forma viso-motora.';
  instruccion='"Ahora contestarás Sí o No"';
  audioInicial='audio/area8/instruccion.mp3';
  preguntas=['Martillo',
    'Guitarra',
    'Cuchara',
    'teléfono',
    'Cepillo y pasta de dientes',
    'Tijeras',
    'Sacapuntas',
    'Lápiz',
    'Cuchillo',
    'Escoba'];
  audio=['audio/area8/1.mp3',
    'audio/area8/2.mp3',
    'audio/area8/3.mp3',
    'audio/area8/4.mp3',
    'audio/area8/5.mp3',
    'audio/area8/6.mp3',
    'audio/area8/7.mp3',
    'audio/area8/8.mp3',
    'audio/area8/9.mp3',
    'audio/area8/10.mp3',];
  imagenes=['imagenes/area8/1.png',
    'imagenes/area8/2.png',
    'imagenes/area8/3.png',
    'imagenes/area8/4.png',
    'imagenes/area8/5.png',
    'imagenes/area8/6.png',
    'imagenes/area8/7.png',
    'imagenes/area8/8.png',
    'imagenes/area8/9.png',
    'imagenes/area8/10.png'];
  respuesta=['positivo'];
  mostrarPreguntas=false;
  inicialrPreguntas(){
    this.mostrarCriterio=false;
    this.mostrarPreguntas=true;
  }


  siguiente( entrada: number){

    if (this.valor+1==10) {
      if (entrada==0){
        this.respuesta[this.valor]='Negativo';
        console.log(this.respuesta[this.valor]);
      }
      else{
        this.respuesta[this.valor]='Positivo';
      }
      this.mostrarPreguntas=false;
      this.mostrarRespuesta=true;
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
      this.mostrarRespuesta=true;

    }

  }
  constructor() { }

  ngOnInit() {
  }

}
