import { Component, OnInit } from '@angular/core';
import {EstudianteService} from "../../services/estudiante.service";
import {Estudiante} from "../../models/estudiante";

@Component({
  selector: 'app-area-cinco',
  templateUrl: './area-cinco.component.html',
  styleUrls: ['./area-cinco.component.css'],
  providers: [EstudianteService]
})
export class AreaCincoComponent implements OnInit {

  identificador = localStorage.getItem('identificador');
  errores = 0;
  valor = 0;
  mostrarCriterio = true;
  mostrarPreguntas = true;
  mostrarAreaPositiva = false;
  cabecera = 'imagenes/cabeceras/CabeceraArea5.png';
  errorAudio = 'Tu navegador no implementa el elemento audio.';
  areaDebilitada = 'Se considera como área debilitada.';
  areaPositiva = 'Se considera como área positiva.';
  criterio = 'Diagnostica la capacidad para escuchar una orden y codificarla en respuesta (Sí o No).';
  instruccion = '"Ahora contestarás Sí o No."';
  preguntas = [
    '¿Los pájaros comen?',
    '¿Los gatos vuelan?',
    '¿Los bebés lloran?',
    '¿Los árboles bailan?',
    '¿Los niños juegan?',
    '¿Los pájaros pintan?',
    '¿Los plátanos escriben?',
    '¿Las personas se casan?',
    '¿Las bicicletas estudian?',
    '¿Las mamás cocinan?',
    '¿El cielo es verde?',
    '¿El sol es caliente?',
    '¿Las flores comen?',
    '¿Los trenes duermen?',
    '¿Los sapos saltan?'];
  audio = [
    'audio/area5/instruccion-1.mp3',
    'audio/area5/2.mp3',
    'audio/area5/3.mp3',
    'audio/area5/4.mp3',
    'audio/area5/5.mp3',
    'audio/area5/6.mp3',
    'audio/area5/7.mp3',
    'audio/area5/8.mp3',
    'audio/area5/9.mp3',
    'audio/area5/10.mp3',
    'audio/area5/11.mp3',
    'audio/area5/12.mp3',
    'audio/area5/13.mp3',
    'audio/area5/14.mp3',
    'audio/area5/15.mp3'];
  respuestaCorrectas = [
    'Si',
    'No',
    'Si',
    'No',
    'Si',
    'No',
    'No',
    'Si',
    'No',
    'Si',
    'No',
    'Si',
    'No',
    'No',
    'Si'];
  respuesta = [];
  respuestaTotal = 1;

  siguiente(entrada: string) {
    this.mostrarCriterio = false;
    if (this.valor + 1 == 15) {
      console.log(this.respuestaCorrectas[this.valor]);
      if (entrada.localeCompare(this.respuestaCorrectas[this.valor])) {
        this.respuesta[this.valor] = 'Negativo';
        console.log(this.respuestaCorrectas[this.valor]);
        this.errores = this.errores + 1;
      } else {
        this.respuesta[this.valor] = 'Positivo';
      }
      this.mostrarPreguntas = false;
    } else {
      if (entrada.localeCompare(this.respuestaCorrectas[this.valor])) {
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
      //this.mostrarPreguntas = false;
      this.mostrarAreaPositiva = false;
    } else {
      this.mostrarAreaPositiva = true;
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

  agregarRespuestaAreaCinco(){
    this.sumar();
    this.estServ.selecionarEstudiante.area5Total = this.respuestaTotal;
    this.estServ.selecionarEstudiante.area5a = this.respuesta[0];
    this.estServ.selecionarEstudiante.area5b = this.respuesta[1];
    this.estServ.selecionarEstudiante.area5c = this.respuesta[2];
    this.estServ.selecionarEstudiante.area5d = this.respuesta[3];
    this.estServ.selecionarEstudiante.area5e = this.respuesta[4];
    this.estServ.selecionarEstudiante.area5f = this.respuesta[5];
    this.estServ.selecionarEstudiante.area5g = this.respuesta[6];
    this.estServ.selecionarEstudiante.area5h = this.respuesta[7];
    this.estServ.selecionarEstudiante.area5i = this.respuesta[8];
    this.estServ.selecionarEstudiante.area5j = this.respuesta[9];
    this.estServ.selecionarEstudiante.area5k = this.respuesta[10];
    this.estServ.selecionarEstudiante.area5l = this.respuesta[11];
    this.estServ.selecionarEstudiante.area5m = this.respuesta[12];
    this.estServ.selecionarEstudiante.area5n = this.respuesta[13];
    this.estServ.selecionarEstudiante.area5o = this.respuesta[14];


    this.estServ.putEstudiante(this.estServ.selecionarEstudiante).subscribe(res => {
      console.log(this.estServ.selecionarEstudiante);
    })
    location.href = '/#/areaSeis';
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
