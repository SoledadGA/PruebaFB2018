import {Component, OnInit} from '@angular/core';
import {EstudianteService} from "../../services/estudiante.service";
import {Estudiante} from "../../models/estudiante";


@Component({
  selector: 'app-area-siete',
  templateUrl: './area-siete.component.html',
  styleUrls: ['./area-siete.component.css'],
  providers: [EstudianteService]
})
export class AreaSieteComponent implements OnInit {

  identificador = localStorage.getItem('identificador');
  valor = 0;
  errores = 0;
  mostrarEjemplo = true;
  mostrarPreguntas = false;
  mostrarRespuestas = false;
  mostrarAreaPositiva = false;
  imagenCabecera = 'imagenes/cabeceras/CabeceraArea7.png';
  errorAudio = 'Tu navegador no implementa el elemento audio.';
  areaDebilitada = 'Se considera como área debilitada.';
  areaPositiva = 'Se considera como área positiva.';
  nombreEjemplo = 'Ejemplo.';
  queDiagnostica = 'Diagnostica codificaciones y decodificaciones abstractas del estudiante.';
  instruccion = '"Completa la frase que yo quiero decir."';
  instruccion2 = 'El arroz es para comer, el agua es para...';
  audioInstruccion = 'audio/area7/instruccion0.mp3';
  imagenEjemplo = [
    'imagenes/area7/comer.jpg',
    'imagenes/area7/tomar.jpg'];
  preguntas = [
    'Un pájaro vuela en el aire, un pez nada en el...',
    'Un pan es para comer, la leche es para...',
    'El humo sube, la lluvia...',
    'Yo me siento en una silla, tu duermes en una...',
    'El fuego significa calor, el hielo significa...',
    'Yo como en un plato, tú tomas en un...',
    'Juan es un niño, María es una...',
    'Los oídos son para escuchar, los ojos son para...',
    'Yo estoy despierto durante el día, tú estás dormido durante la...',
    'Un conejo es rápido, una tortuga es...'];
  audio = [
    'audio/area7/1.mp3',
    'audio/area7/2.mp3',
    'audio/area7/3.mp3',
    'audio/area7/4.mp3',
    'audio/area7/5.mp3',
    'audio/area7/6.mp3',
    'audio/area7/7.mp3',
    'audio/area7/8.mp3',
    'audio/area7/9.mp3',
    'audio/area7/10.mp3'];
  respuesta = [];
  respuestaTotal = 1;

  iniciarPreguntas() {
    this.getEstudiante();
    this.mostrarEjemplo = false;
    this.mostrarPreguntas = true;
    this.mostrarRespuestas = false;

  }

  siguientePregunta(entrada: number) {
    if (this.valor + 1 == 10) {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Negativo';
        this.errores = this.errores + 1;
        console.log(this.respuesta[this.valor]);
      } else {
        this.respuesta[this.valor] = 'Positivo';
      }
      if (this.errores > 3) {
        this.mostrarAreaPositiva = false;
      }
      this.mostrarAreaPositiva = true;
      this.mostrarPreguntas = false;
      this.mostrarRespuestas = true;
    } else {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Negativo';
        this.errores = this.errores + 1;
        console.log(this.respuesta[this.valor]);
      } else {
        this.respuesta[this.valor] = 'Positivo';
        console.log(this.respuesta[this.valor]);
      }
    }
    this.valor = this.valor + 1;
    if (this.errores > 2) {
      //this.mostrarPreguntas = false;
      //this.mostrarRespuestas = true;
      this.mostrarAreaPositiva = false;
    }
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

  agregarRespuestaAreaSiete(){
    this.sumar();
    this.estServ.selecionarEstudiante.area7total = this.respuestaTotal;
    this.estServ.selecionarEstudiante.area7a = this.respuesta[0];
    this.estServ.selecionarEstudiante.area7b = this.respuesta[1];
    this.estServ.selecionarEstudiante.area7c = this.respuesta[2];
    this.estServ.selecionarEstudiante.area7d = this.respuesta[3];
    this.estServ.selecionarEstudiante.area7e = this.respuesta[4];
    this.estServ.selecionarEstudiante.area7f = this.respuesta[5];
    this.estServ.selecionarEstudiante.area7g = this.respuesta[6];
    this.estServ.selecionarEstudiante.area7h = this.respuesta[7];
    this.estServ.selecionarEstudiante.area7i = this.respuesta[8];
    this.estServ.selecionarEstudiante.area7j = this.respuesta[9];

    this.estServ.putEstudiante(this.estServ.selecionarEstudiante).subscribe(res => {
      console.log(this.estServ.selecionarEstudiante);
    })
    location.href = '/#/areaOcho';
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
