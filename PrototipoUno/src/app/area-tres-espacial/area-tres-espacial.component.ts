import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-tres-espacial',
  templateUrl: './area-tres-espacial.component.html',
  styleUrls: ['./area-tres-espacial.component.css']
})
export class AreaTresEspacialComponent implements OnInit {
  cabecera='imagenes/cabeceras/CabeceraArea3.png'
  valor=0;
  titulo='Orientación Espacial';
  mostrarIndicacon=true;
  mostrarSilla=true;
  indicacion='Mide orientación espacial (arriba, debajo, adelante, detrás)';
  instruccion=['Señala la pelota que está arriba de la silla',
    'Señala la pelota que está debajo de la silla',
    'Señala la pelota que está adelante de la silla',
    'Señala la pelota que está detrás de la silla',];
  respuesta=['positivo','positivo','positivo','positivo'];
  audioInstrucciones=['audio/sillaArriba','audio/sillaDebajo','audio/sillaDelante','audio/sillaAtras'];
  mostrarSonido=true;
  audio=['audio/area3/5.mp3','audio/area3/6.mp3','audio/area3/7.mp3','audio/area3/8.mp3'];

  siguiente(entrada : number){
    this.mostrarIndicacon=false;
    if(this.valor+1==4){
      if(entrada!=this.valor){
        this.respuesta[this.valor]='negativo';
        console.log('negativo');
        this.mostrarSilla=false;
        this.mostrarSonido=false;
      }
      else{
        console.log('positivo');
        this.mostrarSilla=false;
        this.mostrarSonido=false;
      }
    }
    if(entrada!=this.valor){
      this.respuesta[this.valor]='negativo';
      console.log('negativo');
    }
    else {
      console.log('positivo')
    }
    this.valor=this.valor+1;

  }
  constructor() { }

  ngOnInit() {
  }

}
