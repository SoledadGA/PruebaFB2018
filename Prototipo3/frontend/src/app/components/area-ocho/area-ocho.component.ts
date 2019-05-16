import {Component, OnInit} from '@angular/core';
import {EstudianteService} from "../../services/estudiante.service";
import {Estudiante} from "../../models/estudiante";

@Component({
  selector: 'app-area-ocho',
  templateUrl: './area-ocho.component.html',
  styleUrls: ['./area-ocho.component.css'],
  providers: [EstudianteService]
})
export class AreaOchoComponent implements OnInit {

  identificador = localStorage.getItem('identificador');
  errores = 0;
  valor = 0;
  mostrarCriterio = true;
  mostrarPreguntas = true;
  mostrarRespuesta = false;
  mostrarAreaPositiva = true;
  cabecera = 'imagenes/cabeceras/CabeceraArea8.png';
  errorAudio = 'Tu navegador no implementa el elemento audio.';
  areaDebilitada = 'Se considera como área debilitada.';
  areaPositiva = 'Se considera como área positiva.';
  criterio = 'Diagnostica como se expresa el estudiante en forma viso-motora.';
  instruccion = '"Yo te nombro un objeto y tú responderás con mímica o señas."';
  preguntas = [
    'Martillo',
    'Guitarra',
    'Cuchara',
    'Teléfono',
    'Cepillo y pasta de dientes',
    'Tijeras',
    'Sacapuntas',
    'Lápiz',
    'Cuchillo',
    'Escoba'];
  audio = [
    'audio/area8/instruccion-1.mp3',
    'audio/area8/2.mp3',
    'audio/area8/3.mp3',
    'audio/area8/4.mp3',
    'audio/area8/5.mp3',
    'audio/area8/6.mp3',
    'audio/area8/7.mp3',
    'audio/area8/8.mp3',
    'audio/area8/9.mp3',
    'audio/area8/10.mp3'];
  imagenes = [
    'imagenes/area8/1.png',
    'imagenes/area8/2.png',
    'imagenes/area8/3.png',
    'imagenes/area8/4.png',
    'imagenes/area8/5.png',
    'imagenes/area8/6.png',
    'imagenes/area8/7.png',
    'imagenes/area8/8.png',
    'imagenes/area8/9.png',
    'imagenes/area8/10.png'];
  respuesta = [];
  respuestaTotal = 1;

  siguiente(entrada: number) {
    this.mostrarCriterio = false;
    if (this.valor + 1 == 10) {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Negativo';
        this.errores = this.errores + 1;
        console.log(this.respuesta[this.valor]);
      } else {
        this.respuesta[this.valor] = 'Positivo';
        //this.mostrarAreaPositiva = true;
      }
      this.mostrarPreguntas = false;
      this.mostrarRespuesta = true;
    } else {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Negativo';
        this.errores = this.errores + 1;
        console.log(this.respuesta[this.valor]);
        this.valor = this.valor + 1;
      } else {
        console.log(this.respuesta[this.valor]);
        this.respuesta[this.valor] = 'Positivo';
        this.valor = this.valor + 1;
      }
    }
    if (this.errores > 2) {
      this.mostrarAreaPositiva = false;
      //this.mostrarPreguntas = false;
      //this.mostrarRespuesta = true;
    }
    if (this.valor == 2){
      this.getEstudiante();
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

  agregarRespuestaAreaOcho(){
    this.sumar();
    this.estServ.selecionarEstudiante.area8total = this.respuestaTotal;
    this.estServ.selecionarEstudiante.area8a = this.respuesta[0];
    this.estServ.selecionarEstudiante.area8b = this.respuesta[1];
    this.estServ.selecionarEstudiante.area8c = this.respuesta[2];
    this.estServ.selecionarEstudiante.area8d = this.respuesta[3];
    this.estServ.selecionarEstudiante.area8e = this.respuesta[4];
    this.estServ.selecionarEstudiante.area8f = this.respuesta[5];
    this.estServ.selecionarEstudiante.area8g = this.respuesta[6];
    this.estServ.selecionarEstudiante.area8h = this.respuesta[7];
    this.estServ.selecionarEstudiante.area8i = this.respuesta[8];
    this.estServ.selecionarEstudiante.area8j = this.respuesta[9];



    this.estServ.putEstudiante(this.estServ.selecionarEstudiante).subscribe(res => {
      console.log(this.estServ.selecionarEstudiante);
    })
    location.href = '/#/areaNueve';
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
