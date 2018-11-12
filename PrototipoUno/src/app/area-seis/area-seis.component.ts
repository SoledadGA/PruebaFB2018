import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-seis',
  templateUrl: './area-seis.component.html',
  styleUrls: ['./area-seis.component.css']
})
export class AreaSeisComponent implements OnInit {
  imagenCabecera = 'imagenes/area6/CabeceraAreaSeis.png';
  valor = 0;
  pasarImg = 0;
  errorAudio = 'Tu navegador no implementa el elemento audio';

  mostrarInstruccion = true;
  queDiagnostica = 'Mide la orientación temporal';

  mostrarPreguntas = true;
  preguntas = ['Este niño está leyendo, busca otro que esté haciendo lo mismo.',
    'Esta persona está barriendo, busca otra que esté haciendo lo mismo.',
    'Esta es una llave, busca otra igual.', 'Esta es una tijera, busca otra igual.'];
  audio = [
    'audio/area6/diaOnoche.mp3', 'audio/area6/diaOnoche.mp3', 'audio/area6/diaOnoche.mp3', 'audio/area6/diaOnoche.mp3',
    'audio/area6/diaOnoche.mp3', 'audio/area6/diaOnoche.mp3', 'audio/area6/diaOnoche.mp3', 'audio/area6/diaOnoche.mp3',
    'audio/area6/diaOnoche.mp3', 'audio/area6/diaOnoche.mp3', 'audio/area6/diaOnoche.mp3', 'audio/area6/diaOnoche.mp3',
    'audio/area6/diaOnoche.mp3', 'audio/area6/diaOnoche.mp3', 'audio/area6/diaOnoche.mp3', 'audio/area6/diaOnoche.mp3'];
  imgMuestra = [
    'imagenes/area6/leyendoMuestra.jpg', 'imagenes/area6/barriendoMuestra.jpg',
    'imagenes/area6/llaveMuestra.png', 'imagenes/area6/tijeraMuestra.png'];
  imgRespuesta = [
    'imagenes/area6/comiendo.jpg', 'imagenes/area6/jugando.jpg', 'imagenes/area6/leyendo.jpg',
    'imagenes/area6/dibujando.png', 'imagenes/area6/cocinando.png', 'imagenes/area6/barriendo.jpg',
    'imagenes/area6/planchando.png', 'imagenes/area6/limpiando.png', 'imagenes/area6/llave1.png',
    'imagenes/area6/llave2.png', 'imagenes/area6/llave3.png', 'imagenes/area6/llave4.png',
    'imagenes/area6/tijera1.png', 'imagenes/area6/tijera2.png', 'imagenes/area6/tijera3.png', 'imagenes/area6/tijera4.png'];
  respuestaPositiva = [
    'imagenes/area6/leyendo.jpg', 'imagenes/area6/barriendo.jpg', 'imagenes/area6/llave4.png', 'imagenes/area6/tijera1.png'];

  mostrarRespuestas = false;
  respuesta = ['Positivo', 'Positivo', 'Positivo', 'Positivo'];

  siguientePregunta(entrada:string){
    this.mostrarInstruccion=false;
    this.pasarImg = this.pasarImg+4;
    if(this.valor+1==4){
      this.mostrarRespuestas=true;
      this.mostrarPreguntas=false;
      if(entrada!=this.respuestaPositiva[this.valor]){
        this.respuesta[this.valor]='Negativo';
        console.log('negativo ' + this.respuestaPositiva[this.valor].toString());
      }
      else{
        console.log('positivo '  + this.respuestaPositiva[this.valor].toString());
      }
    }

    if(entrada!=this.respuestaPositiva[this.valor]){
      console.log(entrada);
      this.respuesta[this.valor] = 'Negativo';
      console.log('negativo ' + this.respuestaPositiva[this.valor].toString());
    }else{
      console.log(entrada);
      console.log('positivo ' + this.respuestaPositiva[this.valor].toString());
    }
    this.valor=this.valor+1;
  }

  constructor() { }

  ngOnInit() {
  }

}
