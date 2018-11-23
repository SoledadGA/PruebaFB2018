import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-uno',
  templateUrl: './area-uno.component.html',
  styleUrls: ['./area-uno.component.css']
})
export class AreaUnoComponent implements OnInit {

  cabecera='imagenes/cabeceras/CabeceraArea1.png';
  numeroEjemplo=0;
  mostrarEjemplo=true;

  imagenesEjemplo=['imagenes/area1/propioCuerpo.gif',
    'imagenes/area1/espejo.png',
    'imagenes/area1/compa.jpeg'];
  audioInstrucciones=['audio/area1/instruccion1.mp3',
    'audio/area1/instruccion2.mp3',
    'audio/area1/instruccion3.mp3'];
  textoInstruccion=['"Mira a los niños lo que hacen, ahora tu harás lo mismo"',
    '"Ahora señala en el espejo"',
    '"Ahora haras lo mismo con otra persona"'];

  queDignostica=['Diagnostica el conocimiento que tiene el estudiante del esquema corporal en su propio cuerpo',
    'Diagnostica el conocimiento que tiene el estudiante del esquema corporal en su propio cuerpo frente a un espejo',
    'Diagnostica el conocimiento que tiene el estudiante del esquema corporal en otra persona'];
  nombreEjemplo=['En su propio cuerpo - Ejemplo',
    'En el espejo - Ejemplo',
    'En otra persona - Ejemplo'];
  instruccion=['Se pide señalar las siguientes 4 partes finas(boca, ojos, nariz, dedo)',
    'Se pide señalar partes finas o gruesas(cabeza, manos, piernas, ojos)',
    'Se pide señalar las siguientes 4 partes gruesas(brazos, piernas, espalda, pecho)'];
  valor=0;
  propioCuerpo=false;
  espejo=false;
  otroCuerpo=false;
  grafica=false;
  respuesta=['Positivo','Positivo','Positivo','Positivo'];
  respuestaE=['Positivo','Positivo','Positivo','Positivo'];
  respuestaO=['Positivo','Positivo','Positivo','Positivo'];
  preguntasP=['Señala tu nariz','Señala tu ojos', 'Señala tus boca', 'Señala tu dedo'];
  preguntasE=['Señala tu cabeza','Señala tus manos', 'Señala tus piernas', 'Señala tus ojos'];
  preguntasO=['Señala los brazos de la otra persona','Señala las piernas de la otra persona', 'Señala la espalda de la otra persona', 'Señala el pecho de la otra persona'];
  estiloBotonEjemplo=['sa-boton-ejemplo1',
  'sa-boton-ejemplo2',
  'sa-boton-ejemplo3'];
  audio=['audio/area1/1-1.mp3',
    'audio/area1/1-2.mp3',
    'audio/area1/1-3.mp3',
    'audio/area1/1-4.mp3'];
  audioE=['audio/area1/2-1.mp3',
    'audio/area1/2-2.mp3',
    'audio/area1/2-3.mp3',
    'audio/area1/2-4.mp3'];
  audioO=['audio/area1/3-1.mp3',
    'audio/area1/3-2.mp3',
    'audio/area1/3-3.mp3',
    'audio/area1/3-4.mp3'];


  iniciarPregutnas(){
    this.mostrarEjemplo=false;
    if(this.numeroEjemplo==0){
      this.propioCuerpo=true;

    }
    if(this.numeroEjemplo==1){
      this.espejo=true;

    }
    if(this.numeroEjemplo==2){
      this.otroCuerpo=true;
    }
    this.numeroEjemplo=this.numeroEjemplo+1;

  }
  siguiente( entrada: number){
    if (this.valor+1==4) {
      if (entrada==0){
        this.respuesta[this.valor]='Negativo';
        console.log(this.respuesta[this.valor]);
      }
      this.valor=0;
      this.mostrarEjemplo=true;
      this.propioCuerpo=false;
    }else{
      if (entrada==0){
        this.respuesta[this.valor]='Negativo';
        console.log(this.respuesta[this.valor]);
        this.valor=this.valor+1;
      }else {
        console.log(this.respuesta[this.valor]);
        this.valor=this.valor+1;
      }
    }
  }
  siguiente1( entrada: number){
    if (this.valor+1==4) {
      if (entrada==0){
        this.respuestaE[this.valor]='Negativo';
        console.log(this.respuestaE[this.valor]);
      }

      this.valor=0;
      this.mostrarEjemplo=true;
      this.espejo=false;
    }else{
      if (entrada==0){
        this.respuestaE[this.valor]='Negativo';
        console.log(this.respuestaE[this.valor]);
        this.valor=this.valor+1;
      }else {
        console.log(this.respuestaE[this.valor]);
        this.valor=this.valor+1;
      }
    }
  }
  siguiente2( entrada: number){
    if (this.valor+1==4) {
      if (entrada==0){
        this.respuestaO[this.valor]='Negativo';
        console.log(this.respuestaO[this.valor]);
      }

      this.grafica=true;
      this.otroCuerpo=false;
    }else{
      if (entrada==0){
        this.respuestaO[this.valor]='Negativo';
        console.log(this.respuestaO[this.valor]);
        this.valor=this.valor+1;
      }else {

        this.valor=this.valor+1;
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
