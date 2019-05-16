import {Component, OnInit} from '@angular/core';
import {EstudianteService} from "../../services/estudiante.service";
import {Estudiante} from "../../models/estudiante";

@Component({
  selector: 'app-area-catorce',
  templateUrl: './area-catorce.component.html',
  styleUrls: ['./area-catorce.component.css'],
  providers: [EstudianteService]
})
export class AreaCatorceComponent implements OnInit {

  identificador = localStorage.getItem('identificador');
  valor = 0;
  errores = 0;
  mostrarDiagnostico = true;
  mostrarPreguntas = true;
  mostrarAreaPositiva = false;
  imagenCabecera = 'imagenes/cabeceras/CabeceraArea14.png';
  errorAudio = 'Tu navegador no implementa el elemento audio.';
  areaDebilitada = 'Se considera como área debilitada.';
  areaPositiva = 'Se considera como área positiva.';
  queDiagnostica = 'Diagnostica la discriminación auditiva.';
  queDiagnostica2 = 'El estudiante debe repetir las dos palabras juntas de cada ítem.';
  instruccion = '"Escucha y repite después de mí."';
  preguntas = [
    'pato - dato',
    'cama - dama',
    'caballo - cabello',
    'rata - lata',
    'hombre - hambre',
    'mesa - misa',
    'mano - mono',
    'tía - día',
    'casa - pasa',
    'pana - lana'];
  audio = [
    'audio/area14/instruccion-1.mp3',
    'audio/area14/2.mp3',
    'audio/area14/3.mp3',
    'audio/area14/4.mp3',
    'audio/area14/5.mp3',
    'audio/area14/6.mp3',
    'audio/area14/7.mp3',
    'audio/area14/8.mp3',
    'audio/area14/9.mp3',
    'audio/area14/10.mp3'];
  respuesta = [];
  respuestaTotal = 1;

  siguientePregunta(entrada: number) {
    this.mostrarDiagnostico = false;
    if (this.valor + 1 == 10) {
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

  agregarRespuestaAreaCatorce(){
    this.sumar();
    this.estServ.selecionarEstudiante.area14total = this.respuestaTotal;
    this.estServ.selecionarEstudiante.area14a = this.respuesta[0];
    this.estServ.selecionarEstudiante.area14b = this.respuesta[1];
    this.estServ.selecionarEstudiante.area14c = this.respuesta[2];
    this.estServ.selecionarEstudiante.area14d = this.respuesta[3];
    this.estServ.selecionarEstudiante.area14e = this.respuesta[4];
    this.estServ.selecionarEstudiante.area14f = this.respuesta[5];
    this.estServ.selecionarEstudiante.area14g = this.respuesta[6];
    this.estServ.selecionarEstudiante.area14h = this.respuesta[7];
    this.estServ.selecionarEstudiante.area14i = this.respuesta[8];
    this.estServ.selecionarEstudiante.area14j = this.respuesta[9];

    this.estServ.putEstudiante(this.estServ.selecionarEstudiante).subscribe(res => {
      console.log(this.estServ.selecionarEstudiante);
    })
    location.href = '/#/areaQuince';
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
