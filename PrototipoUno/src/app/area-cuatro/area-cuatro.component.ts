import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-cuatro',
  templateUrl: './area-cuatro.component.html',
  styleUrls: ['./area-cuatro.component.css']
})
export class AreaCuatroComponent implements OnInit {
  cabecera='imagenes/cabeceras/CabeceraArea4.png';
  valor=0;
  criterio=['No se admite zig-zag.', 'No se admite zig-zag, ni sobre boteo.'];
  instruccion=['Salta en un solo pie','Botea la pelota con una mano'];
  audio=['audio/area4/1.mp3','audio/area4/2.mp3'];
  imagenes=['imagenes/area4/saltar.jpg','imagenes/area4/ninoPelota.png'];
  respuesta=['positivo','positivo'];
  mostrarPreguntas=true;

  siguiente( entrada: number){
    if (this.valor+1==2) {
      if (entrada==0){
        this.respuesta[this.valor]='Negativo';
        console.log(this.respuesta[this.valor]);
      }
      this.mostrarPreguntas=false;
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
  constructor() { }

  ngOnInit() {
  }

}
