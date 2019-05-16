import {Component, OnInit} from '@angular/core';
import {EstudianteService} from "../../services/estudiante.service";
import {Estudiante} from "../../models/estudiante";

@Component({
  selector: 'app-area-doce',
  templateUrl: './area-doce.component.html',
  styleUrls: ['./area-doce.component.css'],
  providers: [EstudianteService]
})
export class AreaDoceComponent implements OnInit {

  identificador = localStorage.getItem('identificador');
  valor = 0;
  errores = 0;
  mostrarDiagnostico = true;
  mostrarPreguntas = true;
  mostrarBoton = false;
  mostrarAreaPositiva = false;
  imagenCabecera = 'imagenes/cabeceras/CabeceraArea12.png';
  errorAudio = 'Tu navegador no implementa el elemento audio.';
  areaDebilitada = 'Se considera como área debilitada.';
  areaPositiva = 'Se considera como área positiva.';
  queDiagnostica = 'Diagnostica la coordinacipon visual auditiva motora, con patrón visual y auditivo.';
  instruccion = 'Mira, escucha y repite después de mí.';
  explicacionBotonVerde = 'Si la respuesta es correcta y el estudiante tiene 5 años o menos, utilizar el botón verde.' +
    ' Caso contrario, si la respuesta es incorrecta dar clic en el botón Negativo y continuar con la prueba.';
  preguntas = [
    '000',
    '00 – 00 ',
    '000 – 00',
    '00 – 0 – 000 ',
    '0 – 000 – 0',
    '0 – 00 – 00 – 000',
    '00 – 000 – 000 – 0000'];
  audio = [
    'audio/area12/1.mp4',
    'audio/area12/2.mp4',
    'audio/area12/3.mp4',
    'audio/area12/4.mp4',
    'audio/area12/5.mp4',
    'audio/area12/6.mp4',
    'audio/area12/7.mp4',];
  respuesta = [];
  respuestaTotal = 1;

  siguientePregunta(entrada: number) {
    this.mostrarDiagnostico = false;
    if (this.valor + 1 == 4) {
      this.mostrarBoton = false;
    } else {
      this.mostrarBoton = false;
    }
    if (this.valor + 1 == 7) {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Negativo';
        this.errores = this.errores + 1;
        console.log(this.respuesta[this.valor]);
      } else {
        this.respuesta[this.valor] = 'Positivo';
      }
      if (this.errores >= 3) {
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
    if (this.errores == 1) {
      this.mostrarPreguntas = false;
      this.mostrarBoton = false;
      this.mostrarAreaPositiva = false;
    }
    if (this.valor == 1){
      this.getEstudiante();
    }
  }

  considerarPositivo() {
    this.mostrarAreaPositiva = true;
    this.mostrarPreguntas = false;
    this.mostrarBoton = false;
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

  agregarRespuestaAreaDoce(){
    this.sumar();
    this.estServ.selecionarEstudiante.area12total = this.respuestaTotal;
    this.estServ.selecionarEstudiante.area12a = this.respuesta[0];
    this.estServ.selecionarEstudiante.area12b = this.respuesta[1];
    this.estServ.selecionarEstudiante.area12c = this.respuesta[2];
    this.estServ.selecionarEstudiante.area12d = this.respuesta[3];
    this.estServ.selecionarEstudiante.area12e = this.respuesta[4];
    this.estServ.selecionarEstudiante.area12f = this.respuesta[5];
    this.estServ.selecionarEstudiante.area12g = this.respuesta[6];


    this.estServ.putEstudiante(this.estServ.selecionarEstudiante).subscribe(res => {
      console.log(this.estServ.selecionarEstudiante);
    })
    location.href = '/#/areaTrece';
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
