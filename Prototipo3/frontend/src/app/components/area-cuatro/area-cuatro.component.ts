import {Component, OnInit} from '@angular/core';
import {EstudianteService} from "../../services/estudiante.service";
import {Estudiante} from "../../models/estudiante";

@Component({
  selector: 'app-area-cuatro',
  templateUrl: './area-cuatro.component.html',
  styleUrls: ['./area-cuatro.component.css'],
  providers: [EstudianteService]
})
export class AreaCuatroComponent implements OnInit {

  identificador = localStorage.getItem('identificador');
  valor = 0;
  errores = 0;
  mostrarPreguntas = true;
  mostrarAreaPositiva = false;
  cabecera = 'imagenes/cabeceras/CabeceraArea4.png';
  errorAudio = 'Tu navegador no implementa el elemento audio.';
  areaDebilitada = 'Se considera como área debilitada.';
  areaPositiva = 'Se considera como área positiva.';
  instruccion = [
    'Salta en un solo pie.',
    'Botea la pelota con una mano.'];
  criterio = [
    'No se admite zig-zag.',
    'No se admite zig-zag, ni sobre boteo.'];
  audio = [
    'audio/area4/1.mp3',
    'audio/area4/2.mp3'];
  imagenes = [
    'imagenes/area4/saltar.jpg',
    'imagenes/area4/ninoPelota.png'];
  respuesta = [];
  respuestaTotal = 1;

  siguiente(entrada: number) {
    if (this.valor + 1 == 2) {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Negativo';
        console.log(this.respuesta[this.valor]);
        this.errores = this.errores + 1;
      } else {
        this.respuesta[this.valor] = 'Positivo';
      }
      if (this.errores > 0) {
        this.mostrarAreaPositiva = false;
      } else {
        this.mostrarAreaPositiva = true;
      }
      this.mostrarPreguntas = false;
    } else {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Negativo';
        console.log(this.respuesta[this.valor]);
        this.errores = this.errores + 1;
        this.valor = this.valor + 1;
      } else {
        this.respuesta[this.valor] = 'Positivo';
        console.log(this.respuesta[this.valor]);
        this.valor = this.valor + 1;
      }
    }
    if (this.valor == 1){
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

  agregarRespuestaAreaCuatro(){
    this.sumar();
    this.estServ.selecionarEstudiante.area4Total = this.respuestaTotal;
    this.estServ.selecionarEstudiante.area4a = this.respuesta[0];
    this.estServ.selecionarEstudiante.area4b = this.respuesta[1];

    this.estServ.putEstudiante(this.estServ.selecionarEstudiante).subscribe(res => {
      console.log(this.estServ.selecionarEstudiante);
    })
    location.href = '/#/areaCinco';
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
