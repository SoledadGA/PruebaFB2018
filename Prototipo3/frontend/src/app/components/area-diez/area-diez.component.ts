import {Component, OnInit} from '@angular/core';
import {EstudianteService} from "../../services/estudiante.service";
import {Estudiante} from "../../models/estudiante";

@Component({
  selector: 'app-area-diez',
  templateUrl: './area-diez.component.html',
  styleUrls: ['./area-diez.component.css'],
  providers: [EstudianteService]
})
export class AreaDiezComponent implements OnInit {

  identificador = localStorage.getItem('identificador');
  valor = 0;
  errores = 0;
  mostrarDiagnostico = true;
  mostrarPreguntas = true;
  mostrarAreaPositiva = false;
  imagenCabecera = 'imagenes/cabeceras/CabeceraArea10.png';
  errorAudio = 'Tu navegador no implementa el elemento audio.';
  areaDebilitada = 'Se considera como área debilitada.';
  areaPositiva = 'Se considera como área positiva.';
  queDiagnostica = 'Diagnostica la pronunciación  con palabras cuyo esquema mental está estucturado.';
  instruccion = '"Escucha y repite después de mí."';
  preguntas = [
    'Franelógrafo',
    'Esferográfico',
    'Triciclo',
    'Lengua',
    'Periódico',
    'Columpio'];
  audio = [
    'audio/area10/instruccion-1.mp3',
    'audio/area10/2.mp3',
    'audio/area10/3.mp3',
    'audio/area10/4.mp3',
    'audio/area10/5.mp3',
    'audio/area10/6.mp3'];
  respuesta = [];
  respuestaTotal = 1;

  siguientePregunta(entrada: number) {
    this.mostrarDiagnostico = false;
    if (this.valor + 1 == 6) {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Negativo';
        this.errores = this.errores + 1;
        console.log(this.respuesta[this.valor]);
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
        this.errores = this.errores + 1;
        console.log(this.errores);
      } else {
        this.respuesta[this.valor] = 'Positivo';
      }
      this.valor = this.valor + 1;
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

  agregarRespuestaAreaDiez(){
    this.sumar();
    this.estServ.selecionarEstudiante.area10total = this.respuestaTotal;
    this.estServ.selecionarEstudiante.area10a = this.respuesta[0];
    this.estServ.selecionarEstudiante.area10b = this.respuesta[1];
    this.estServ.selecionarEstudiante.area10c = this.respuesta[2];
    this.estServ.selecionarEstudiante.area10d = this.respuesta[3];
    this.estServ.selecionarEstudiante.area10e = this.respuesta[4];
    this.estServ.selecionarEstudiante.area10f = this.respuesta[5];

    this.estServ.putEstudiante(this.estServ.selecionarEstudiante).subscribe(res => {
      console.log(this.estServ.selecionarEstudiante);
    })
    location.href = '/#/areaOnce';
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
