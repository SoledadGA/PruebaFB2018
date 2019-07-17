import {Component, OnInit} from '@angular/core';
import {EstudianteService} from "../../services/estudiante.service";
import {Estudiante} from "../../models/estudiante";


@Component({
  selector: 'app-area-quince',
  templateUrl: './area-quince.component.html',
  styleUrls: ['./area-quince.component.css'],
  providers: [EstudianteService]
})
export class AreaQuinceComponent implements OnInit {

  identificador = localStorage.getItem('identificador');
  valor = 0;
  errores = 0;
  mostrarDiagnostico = true;
  mostrarPreguntas = true;
  mostrarAreaPositiva = false;
  imagenCabecera = 'imagenes/cabeceras/CabeceraArea15.png';
  errorAudio = 'Tu navegador no implementa el elemento audio.';
  areaDebilitada = 'Se considera como área debilitada.';
  areaPositiva = 'Se considera como área positiva.';
  queDiagnostica = 'Diagnostica coordinación visomotora.';
  instruccion = 'Mira y copia este dibujo en una hoja.';
  preguntas = [
    'imagenes/area15/1.png',
    'imagenes/area15/2.png',
    'imagenes/area15/3.png'];
  dibujos = [
    'Dibujo 1',
    'Dibujo 2',
    'Dibujo 3'];
  audio = [
    'audio/area15/1.mp3',
    'audio/area15/2.mp3',
    'audio/area15/3.mp3'];
  estilo = [
    'sa-img',
    'sa-img2',
    'sa-img2'];
  respuesta = [];
  respuestaTotal = 1;

  siguientePregunta(entrada: number) {
    this.mostrarDiagnostico = false;
    if (this.valor + 1 == 3) {
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

  agregarRespuestaAreaQuince(){
    this.sumar();
    this.estServ.selecionarEstudiante.area15Total = this.respuestaTotal;
    this.estServ.selecionarEstudiante.area15a = this.respuesta[0];
    this.estServ.selecionarEstudiante.area15b = this.respuesta[1];
    this.estServ.selecionarEstudiante.area15c = this.respuesta[2];


    this.estServ.putEstudiante(this.estServ.selecionarEstudiante).subscribe(res => {
      console.log(this.estServ.selecionarEstudiante);
    })
    location.href = '/#/areaDieciseis';
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
