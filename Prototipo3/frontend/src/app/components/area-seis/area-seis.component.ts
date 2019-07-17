import {Component, OnInit} from '@angular/core';
import {EstudianteService} from "../../services/estudiante.service";
import {Estudiante} from "../../models/estudiante";

@Component({
  selector: 'app-area-seis',
  templateUrl: './area-seis.component.html',
  styleUrls: ['./area-seis.component.css'],
  providers: [EstudianteService]
})
export class AreaSeisComponent implements OnInit {


  identificador = localStorage.getItem('identificador');
  valor = 0;
  pasarImg = 0;
  errores = 0;
  imagenf = ['sa-img', 'sa-img1'];
  mostrarInstruccion = true;
  mostrarPreguntas = true;
  mostrarRespuestas = false;
  mostrarAreaPositiva = false;
  imagenCabecera = 'imagenes/cabeceras/CabeceraArea6.png';
  errorAudio = 'Tu navegador no implementa el elemento audio.';
  areaDebilitada = 'Se considera como área debilitada.';
  areaPositiva = 'Se considera como área positiva.';
  queDiagnostica = 'Diagnostica si el estudiante percibe un estímulo visual o no.';
  preguntas = [
    'Este niño está leyendo, busca otro que esté haciendo lo mismo.',
    'Esta persona está barriendo, busca otra que esté haciendo lo mismo.',
    'Esta es una llave, busca otra igual.', 'Esta es una tijera, busca otra igual.'];
  audio = [
    'audio/area6/1.mp3',
    'audio/area6/2.mp3',
    'audio/area6/3.mp3',
    'audio/area6/4.mp3'];
  imgMuestra = [
    'imagenes/area6/leyendoMuestra.jpg',
    'imagenes/area6/barriendoMuestra.jpg',
    'imagenes/area6/llaveMuestra.png',
    'imagenes/area6/tijeraMuestra.png'];
  imgRespuesta = [
    'imagenes/area6/comiendo.jpg',
    'imagenes/area6/jugando.jpg',
    'imagenes/area6/leyendo.jpg',
    'imagenes/area6/dibujando.png',
    'imagenes/area6/cocinando.jpg',
    'imagenes/area6/barriendo.jpg',
    'imagenes/area6/planchando.png',
    'imagenes/area6/limpiando.jpg',
    'imagenes/area6/llave1.png',
    'imagenes/area6/llave2.png',
    'imagenes/area6/llave3.png',
    'imagenes/area6/llave4.png',
    'imagenes/area6/tijera1.png',
    'imagenes/area6/tijera2.png',
    'imagenes/area6/tijera3.png',
    'imagenes/area6/tijera4.png'];
  respuestaPositiva = [
    'imagenes/area6/leyendo.jpg',
    'imagenes/area6/barriendo.jpg',
    'imagenes/area6/llave4.png',
    'imagenes/area6/tijera1.png'];
  respuesta = [];
  respuestaTotal = 1;

  siguientePregunta(entrada: string) {
    this.mostrarInstruccion = false;
    this.pasarImg = this.pasarImg + 4;
    if (this.valor + 1 == 4) {
      this.mostrarRespuestas = true;
      this.mostrarPreguntas = false;
      if (entrada != this.respuestaPositiva[this.valor]) {
        this.respuesta[this.valor] = 'Negativo';
        this.errores = this.errores + 1;
        console.log('negativo ' + this.respuestaPositiva[this.valor].toString());
      }
      else {
        this.respuesta[this.valor] = 'Positivo';
        console.log('positivo ' + this.respuestaPositiva[this.valor].toString());
      }
      if (this.errores > 1) {
        this.mostrarAreaPositiva = false;
        this.mostrarAreaPositiva = false;
      } else {
        this.mostrarAreaPositiva = true;
        this.mostrarAreaPositiva = true;
      }
    }

    if (entrada != this.respuestaPositiva[this.valor]) {
      console.log(entrada);
      this.respuesta[this.valor] = 'Negativo';
      this.errores = this.errores + 1;
      console.log('negativo ' + this.respuestaPositiva[this.valor].toString());
    } else {
      this.respuesta[this.valor] = 'Positivo';
      console.log(entrada);
      console.log('positivo ' + this.respuestaPositiva[this.valor].toString());
    }
    if (this.valor == 2) {
      this.getEstudiante();
    }
    this.valor = this.valor + 1;
  }

  getEstudiante(){
    console.log("El identificador es " +this.identificador);
    this.estServ.getEstudiantebyID(this.identificador)
      .subscribe(res => {
        console.log(res)
        this.estServ.selecionarEstudiante = res as Estudiante;
      });
    //console.log(this.employeeService.selectedEmployee);
  }

  agregarRespuestaAreaSeis(){
    this.sumar();
    this.estServ.selecionarEstudiante.area6Total = this.respuestaTotal;
    this.estServ.selecionarEstudiante.area6a = this.respuesta[0];
    this.estServ.selecionarEstudiante.area6b = this.respuesta[1];
    this.estServ.selecionarEstudiante.area6c = this.respuesta[2];
    this.estServ.selecionarEstudiante.area6d = this.respuesta[3];

    this.estServ.putEstudiante(this.estServ.selecionarEstudiante).subscribe(res => {
      console.log(this.estServ.selecionarEstudiante);
    })
    location.href = '/#/areaSiete';
  }


  sumar(){
    if(this.mostrarAreaPositiva){
      this.respuestaTotal = 0;
    }
  }

  constructor(private estServ: EstudianteService) {
  }

  ngOnInit() {
  }

}
