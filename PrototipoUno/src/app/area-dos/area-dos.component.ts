import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-dos',
  templateUrl: './area-dos.component.html',
  styleUrls: ['./area-dos.component.css']
})
export class AreaDosComponent implements OnInit {
  cabecera='imagenes/cabeceras/CabeceraArea2.png';
  mostrarEjemplo=true;
  valor=0;
  nombreEjemplo = 'Ejemplo';
  imagenEjemplo = 'imagenes/area2/EjemploA2.jpg';
  queDignostica = 'Diagnostica la dominancia lateral, con una serie de actividades con el ojo, mano, oído y pie.\n' +
    'El estudiante deberá realizar las actividades según las instrucciones que se da en cada literal.';
  textoInstruccion = '"Mira a la niña contestar el teléfono, ahora mira los objetos que están en la mesa, con estos objetos harás lo siguiente"';
  audioInstrucciones ='audio/area2/instruccion.mp3';

  mostrarPreguntas = false;
  parteTitulo=['Ojo','Mano','Oido','Pie'];
  preguntas = ['Mira por el tubo','Coge el lápiz y has un círculo','Coge el reloj y escucha si suena','Coge la pelota y patéala'];
  audio=['audio/area2/1.mp3','audio/area2/2.mp3','audio/area2/3.mp3','audio/area2/4.mp3'];

  mostrarRespuestas = false;
  respuesta =['Derecha','Derecha','Derecha','Derecha'];

  iniciarPreguntas(){
    this.mostrarEjemplo=false;
    this.mostrarPreguntas=true;
  }
  siguientePregunta(entrada:number){
    if (this.valor+1==4) {
      if (entrada==0){
        this.respuesta[this.valor]='Izquierda';
        console.log(this.respuesta[this.valor]);
      }
      this.mostrarPreguntas=false;
      this.mostrarRespuestas=true;
    }else{
      if (entrada==0){
        this.respuesta[this.valor]='Izquierda';
        console.log(this.respuesta[this.valor]);
        this.valor=this.valor+1;
      }else {
        console.log(this.respuesta[this.valor]);
        this.valor=this.valor+1;
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
