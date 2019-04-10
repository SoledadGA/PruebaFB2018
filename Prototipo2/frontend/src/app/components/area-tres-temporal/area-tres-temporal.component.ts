import {Component, OnInit} from '@angular/core';
import {EstudianteService} from "../../services/estudiante.service";
import {Estudiante} from "../../models/estudiante";

@Component({
  selector: 'app-area-tres-temporal',
  templateUrl: './area-tres-temporal.component.html',
  styleUrls: ['./area-tres-temporal.component.css'],
  providers: [EstudianteService]
})
export class AreaTresTemporalComponent implements OnInit {

  identificador = localStorage.getItem('identificador');
  valor = 0;
  errores = 0;
  mostrarEjemplo = true;
  mostrarPreguntas = false;
  mostrarImagenes = false;
  mostrarRespuestas = false;
  mostrarAreaPositiva = false;
  imagenCabecera = 'imagenes/cabeceras/CabeceraArea3.png';
  errorAudio = 'Tu navegador no implementa el elemento audio.';
  areaDebilitada = 'Se considera como área debilitada.';
  areaPositiva = 'Se considera como área positiva.';
  nombreEjemplo = 'Orientación Temporal - Ejemplo.';
  queDiagnostica = 'Mide la orientación temporal.';
  textoInstruccion = 'Los niños van a la escuela. ¿En el de día o en la noche?';
  parteTitulo = 'Orientación Temporal.';
  imagenEjemplo = [
    'imagenes/area3T/noche.png',
    'imagenes/area3T/dia.jpg'];
  preguntas = [
    'En este momento. ¿Es de día o es de noche?',
    '¿Qué haces por las noches?',
    '¿Qué hiciste ayer en la escuela o en tu casa?',
    '¿Qué hiciste hoy?'];
  respuestaPositiva = [
    'imagenes/area3T/dia.jpg',
    'imagenes/area3T/dormir.png'];
  respuestaNegativa = [
    'imagenes/area3T/noche.png',
    'imagenes/area3T/jugar.jpg'];
  audioInstruccion = 'audio/area3/instruccion.mp3';
  audio = [
    'audio/area3/1.mp3',
    'audio/area3/2.mp3',
    'audio/area3/3.mp3',
    'audio/area3/4.mp3'];
  respuesta = [];
  respuestaTotal = 'Área Negativa';

  iniciarPreguntas() {
    this.getEstudiante();
    this.mostrarEjemplo = false;
    this.mostrarPreguntas = true;
    this.mostrarImagenes = true;
  }

  siguientePregunta(entrada: number) {
    if (this.valor + 1 == 2) {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Negativo';
        this.errores = this.errores + 1;
        console.log(this.respuesta[this.valor]);
      } else {
        this.respuesta[this.valor] = 'Positivo';
      }
      this.mostrarImagenes = false;
    }
    if (this.valor + 1 == 4) {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Negativo';
        this.errores = this.errores + 1;
        console.log(this.respuesta[this.valor]);
      } else {
        this.respuesta[this.valor] = 'Positivo';
      }
      if (this.errores >= 1) {
        this.mostrarAreaPositiva = false;
      } else {
        this.mostrarAreaPositiva = true;
      }
      this.mostrarPreguntas = false;
      this.mostrarRespuestas = true;
      this.mostrarImagenes = false;
    } else {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Negativo';
        this.errores = this.errores + 1;
        console.log(this.respuesta[this.valor]);
      } else {
        this.respuesta[this.valor] = 'Positivo';
      }
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

  sumar(){
    if(this.mostrarAreaPositiva){
      this.respuestaTotal = 'Área Positiva';
    }
  }

  agregarRespuestaAreaTresTemporal(){
    this.sumar();
    this.estServ.selecionarEstudiante.aera3TemporalTotal= this.respuestaTotal;
    this.estServ.selecionarEstudiante.area3Ta = this.respuesta[0];
    this.estServ.selecionarEstudiante.area3Tb = this.respuesta[1];
    this.estServ.selecionarEstudiante.area3Tc = this.respuesta[2];
    this.estServ.selecionarEstudiante.area3Td = this.respuesta[3];

    this.estServ.putEstudiante(this.estServ.selecionarEstudiante).subscribe(res => {
      console.log(this.estServ.selecionarEstudiante);
    })
    location.href = '/#/areaTresEspacial';
  }

  constructor(private estServ: EstudianteService) {
  }

  ngOnInit() {
  }

}
