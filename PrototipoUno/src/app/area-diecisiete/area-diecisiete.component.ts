import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-diecisiete',
  templateUrl: './area-diecisiete.component.html',
  styleUrls: ['./area-diecisiete.component.css']
})
export class AreaDiecisieteComponent implements OnInit {
  imagenCabecera = 'imagenes/cabeceras/CabeceraArea17.png';
  valor = 0;
  errores = 0;

  errorAudio = 'Tu navegador no implementa el elemento audio';

  mostrarDiagnostico = true;
  queDiagnostica = 'Diagnostica la motricidad fina.';
  queDiagnostica2 = 'Se considera positivo si corta más del 50% del dibujo.';

  mostrarPreguntas = true;
  instruccion = 'Recorta lo más rápido que puedas las siguientes figuras, sin topar las líneas laterales';
  preguntas = ['imagenes/area17/1.png', 'imagenes/area17/2.png'];
  dibujos = ['Recorte 1', 'Recorte 2'];
  audio = ['audio/area17/1.mp3', 'audio/area17/2.mp3'];

  mostrarAreaPositiva = false;
  areaDebilitada = 'Se considera como área debilitada';
  areaPositiva = 'Se considera como área positiva';
  respuesta = ['Positivo', 'Positivo'];

  siguientePregunta( entrada: number){
    this.mostrarDiagnostico=false;
    if (this.valor+1==2) {
      if (entrada==0){
        this.respuesta[this.valor]='Negativo';
        this.errores=this.errores+1;
        console.log(this.respuesta[this.valor]);
      }
      if (this.errores>=1){
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
