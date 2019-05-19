import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {EstudianteService} from "../../services/estudiante.service";
import {Estudiante} from "../../models/estudiante";

@Component({
  selector: 'app-area-dos',
  templateUrl: './area-dos.component.html',
  styleUrls: ['./area-dos.component.css'],
  providers: [EstudianteService]
})
export class AreaDosComponent implements OnInit {

  identificadorPrueba = localStorage.getItem('tipoTest');
  identificador = localStorage.getItem('identificador');
  valor = 0;
  derecha = 0;
  izquierda = 4;
  mostrarEjemplo = true;
  mostrarPreguntas = false;
  mostrarAreaPositiva = false;
  mostrarRespuestas = false;
  cabecera = 'imagenes/cabeceras/CabeceraArea2.png';
  errorAudio = 'Tu navegador no implementa el elemento audio.';
  areaDebilitada = 'Se considera como área debilitada.';
  areaPositiva = 'Se considera como área positiva.';
  nombreEjemplo = 'Ejemplo.';
  imagenEjemplo = 'imagenes/area2/EjemploA2.jpg';
  queDiagnostica = 'Diagnostica la dominancia lateral, con una serie de actividades con el ojo, mano, oído y pie.';
  queDiagnostica2 = 'El estudiante deberá realizar las actividades según las instrucciones que se da en cada literal.';
  textoInstruccion = '"Mira a la niña contestar el teléfono. Ahora, mira los objetos que están en la mesa, ' +
    'con estos objetos harás lo siguiente."';
  parteTitulo = [
    'Ojo.',
    'Mano.',
    'Oído.',
    'Pie.'];
  preguntas = [
    'Mira por el tubo.',
    'Coge el lápiz y has un círculo.',
    'Coge el reloj y escucha si suena.',
    'Coge la pelota y patéala.'];
  audioInstrucciones = 'audio/area2/instruccion.mp3';
  audio = [
    'audio/area2/1.mp3',
    'audio/area2/2.mp3',
    'audio/area2/3.mp3',
    'audio/area2/4.mp3'];
  respuesta = [];
  respuestaTotal = 1;

  iniciarPreguntas() {
    this.getEstudiante();
    this.mostrarEjemplo = false;
    this.mostrarPreguntas = true;

  }

  tipoTest(){
    if(this.identificadorPrueba == 'test'){
      this.estServ.selecionarEstudiante.paralelo = 'Inicial' ;
    }
  }

  sumar(){
    if(this.mostrarAreaPositiva){
      this.respuestaTotal = 0;
    }
  }
  siguientePregunta(entrada: number) {
    if (this.valor + 1 == 4) {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Izquierda';
        this.izquierda = this.izquierda - 1;
        // console.log(this.derecha + "izq");
      } else {
        this.respuesta[this.valor] = 'Derecha';
        // this.izquierda=this.izquierda-1;
        this.izquierda = this.izquierda + 1;
        this.derecha = this.derecha + 1;
        console.log(this.derecha);
      }
      if (this.derecha == 4) {
        this.mostrarAreaPositiva = true;
      } else {
        if (this.izquierda == 0) {
          this.mostrarAreaPositiva = true;
        }
      }
      this.mostrarPreguntas = false;
      this.mostrarRespuestas = true;
    } else {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Izquierda';
        this.izquierda = this.izquierda - 1;
        // console.log(this.errores + "izq");
      } else {
        this.respuesta[this.valor] = 'Derecha';
        this.izquierda = this.izquierda + 1;
        this.derecha = this.derecha + 1;
        console.log(this.derecha);
      }
      this.valor = this.valor + 1;
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

  agregarRespuestaAreaDos(){
    this.tipoTest();
    this.sumar();
    this.estServ.selecionarEstudiante.area2Total = this.respuestaTotal;
    this.estServ.selecionarEstudiante.area2a = this.respuesta[0];
    this.estServ.selecionarEstudiante.area2b = this.respuesta[1];
    this.estServ.selecionarEstudiante.area2c = this.respuesta[2];
    this.estServ.selecionarEstudiante.area2d = this.respuesta[3];

    this.estServ.putEstudiante(this.estServ.selecionarEstudiante).subscribe(res => {
      console.log(this.estServ.selecionarEstudiante);
    })
    location.href = '/#/areaTresTemporal';
  }

  constructor(private estServ: EstudianteService) {
  }

  ngOnInit() {
  }
}
