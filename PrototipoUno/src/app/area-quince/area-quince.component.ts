import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-quince',
  templateUrl: './area-quince.component.html',
  styleUrls: ['./area-quince.component.css']
})
export class AreaQuinceComponent implements OnInit {
  imagenCabecera = 'imagenes/cabeceras/CabeceraArea15.png';
  valor = 0;
  errores = 0;

  errorAudio = 'Tu navegador no implementa el elemento audio';

  mostrarDiagnostico = true;
  queDiagnostica = 'Diagnóstica coordinación visomotora.';

  mostrarPreguntas = true;
  instruccion = 'Mira y copia este dibujo en una hoja';
  preguntas = ['imagenes/area15/1.png', 'imagenes/area15/2.png', 'imagenes/area15/3.png'];
  dibujos = ['Dibujo 1', 'Dibujo 2', 'Dibujo 3'];
  audio = ['audio/area15/instruccion1.mp3', 'audio/area15/instruccion2.mp3', 'audio/area15/instruccion3.mp3'];
  estilo=['sa-img','sa-img2','sa-img2'];

  mostrarAreaPositiva = false;
  areaDebilitada = 'Se considera como área debilitada';
  areaPositiva = 'Se considera como área positiva';
  respuesta = ['Positivo', 'Positivo', 'Positivo'];

  siguientePregunta( entrada: number){
    this.mostrarDiagnostico=false;
    if (this.valor+1==3) {
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
