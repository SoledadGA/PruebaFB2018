import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-uno',
  templateUrl: './area-uno.component.html',
  styleUrls: ['./area-uno.component.css']
})
export class AreaUnoComponent implements OnInit {

  numeroEjemplo=0;
  mostrarEjemplo=true;

  imagenesEjemplo=['imagenes/propioCuerpo.gif','imagenes/espejo.png','imagenes/compa.jpeg'];
  audioInstrucciones=['audio/instruccion1.mp3',
    'audio/instruccion2.mp3',
    'audio/instruccion3.mp3'];
  textoInstruccion=['"Mira a los niños hacer lo que hance, ahora tu aras lo mismo"',
    '"Ahora señalaremos en el espejo"',
    '"Ahora aremos lo mismo con otra persona"'];

  queDignostica=['Diagnostica el conocimiento que tiene el estudiante del esquema corporal en su propio cuerpo',
    'Diagnostica el conocimiento que tiene el estudiante del esquema corporal en su propio cuerpo frente a un espejo',
    'Diagnostica el conocimiento que tiene el estudiante del esquema corporal en en otra persona'];
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
  preguntasP=['Señala tu boca','Señala tu nariz', 'Señala tus ojos', 'Señala tu dedo'];
  preguntasE=['Señala tu cabeza','Señala tus manos', 'Señala tus piernas', 'Señala tus ojos'];
  preguntasO=['Señala los brazos de la otra persona','Señala las piernas de la otra persona', 'Señala la espalda de la otra persona', 'Señala el pecho de la otra persona'];

  audio=['audio/Sboca.mp3','audio/Snariz.mp3','audio/Sojos.mp3','audio/Sdedo.mp3'];
  audioE=['audio/Scabeza.mp3','audio/Smanos.mp3','audio/Spiernas.mp3','audio/Sojos.mp3'];
  audioO=['audio/SbrazosO.mp3','audio/SpiernasO.mp3','audio/SespaldaO.mp3','audio/SpechoO.mp3'];


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
