import {Component, OnInit} from '@angular/core';
import {EstudianteService} from "../../services/estudiante.service";
import {Estudiante} from "../../models/estudiante";

@Component({
  selector: 'app-area-uno',
  templateUrl: './area-uno.component.html',
  styleUrls: ['./area-uno.component.css'],
  providers: [EstudianteService]
})
export class AreaUnoComponent implements OnInit {


  verPrueba = false;
  mostrarDatos = false;
  iniciarTs = true;
  identificadorPrueba = localStorage.getItem('tipoTest');
  any = [];
  numeroEjemplo = 0;
  valor = 0;
  errores = 0;
  fecha = new Date();
  txtFecha = (this.fecha.getDate() + '/' + (this.fecha.getMonth() + 1) + '/' + (this.fecha.getFullYear()));
  erroresE = 0;
  erroresO = 0;
  mostrarEjemplo = false;
  propioCuerpo = false;
  espejo = false;
  otroCuerpo = false;
  grafica = false;
  mostrarAreaPositiva = false;
  cabecera = 'imagenes/cabeceras/CabeceraArea1.png';
  errorAudio = 'Tu navegador no implementa el elemento audio.';
  areaDebilitada = 'Se considera como área debilitada.';
  areaPositiva = 'Se considera como área positiva.';
  textoInstruccion = [
    '"Mira a los niños lo que hacen, ahora tu harás lo mismo."',
    '"Ahora señala en el espejo."',
    '"Ahora, harás lo mismo con otra persona."'];
  queDignostica = [
    'Diagnostica el conocimiento que tiene el estudiante del esquema corporal en su propio cuerpo.',
    'Diagnostica el conocimiento que tiene el estudiante del esquema corporal en su propio cuerpo frente a un espejo.',
    'Diagnostica el conocimiento que tiene el estudiante del esquema corporal en otra persona.'];
  nombreEjemplo = [
    'En su propio cuerpo - Ejemplo.',
    'En el espejo - Ejemplo.',
    'En otra persona - Ejemplo.'];
  instruccion = [
    'Se pide señalar las siguientes 4 partes finas (boca, ojos, nariz, dedo).',
    'Se pide señalar partes finas o gruesas (cabeza, manos, piernas, ojos).',
    'Se pide señalar las siguientes 4 partes gruesas (brazos, piernas, espalda, pecho).'];
  preguntasP = [
    'Señala tu nariz.',
    'Señala tus ojos.',
    'Señala tu boca.',
    'Señala tu dedo.'];
  preguntasE = [
    'Señala tu cabeza.',
    'Señala tus manos.',
    'Señala tus piernas.',
    'Señala tus ojos.'];
  preguntasO = [
    'Señala los brazos de la otra persona.',
    'Señala las piernas de la otra persona.',
    'Señala la espalda de la otra persona.',
    'Señala el pecho de la otra persona.'];
  imagenesEjemplo = [
    'imagenes/area1/propioCuerpo.gif',
    'imagenes/area1/espejo.png',
    'imagenes/area1/compa.jpeg',
    'imagenes/area1/1.png'];
  estiloBotonEjemplo = [
    'sa-boton-ejemplo1',
    'sa-boton-ejemplo2',
    'sa-boton-ejemplo3'];
  audioInstrucciones = [
    'audio/area1/instruccion1.mp3',
    'audio/area1/instruccion2.mp3',
    'audio/area1/instruccion3.mp3'];
  audio = [
    'audio/area1/1-1.mp3',
    'audio/area1/1-2.mp3',
    'audio/area1/1-3.mp3',
    'audio/area1/1-4.mp3'];
  audioE = [
    'audio/area1/2-1.mp3',
    'audio/area1/2-2.mp3',
    'audio/area1/2-3.mp3',
    'audio/area1/2-4.mp3'];
  audioO = [
    'audio/area1/3-1.mp3',
    'audio/area1/3-2.mp3',
    'audio/area1/3-3.mp3',
    'audio/area1/3-4.mp3'];
  respuesta = [];
  respuestaE = [];
  respuestaO = [];
  contadorNegativos1=0;
  contadorNegativos2=0;
  contadorNegativos3=0;
  resputaA='Positivo';
  resputaB='Positivo';
  resputaC='Positivo';
  respuestaTotal = 1;
  tipoPrueba = 0 ;
  Fechita  = '';
  id = '';

  iniciarFecha(){
    this.Fechita = this.txtFecha;
  }

  tipoTest(){
    if(this.identificadorPrueba == 'reTest'){
      this.tipoPrueba = 1 ;
    }
    if(this.identificadorPrueba == 'freeTest'){
      this.tipoPrueba = 2 ;
    }
  }

  iniciarPreguntas() {
    this.mostrarEjemplo = false;
    if (this.numeroEjemplo == 0) {
      this.propioCuerpo = true;

    }
    if (this.numeroEjemplo == 1) {
      this.espejo = true;
    }
    if (this.numeroEjemplo == 2) {
      this.otroCuerpo = true;
    }
    this.numeroEjemplo = this.numeroEjemplo + 1;
  }

  siguiente(entrada: number) {
    if (this.valor + 1 == 4) {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Negativo';
        console.log(this.respuesta[this.valor]);
        this.errores = this.errores + 1;
      } else {
        this.respuesta[this.valor] = 'Positivo';
      }
      this.valor = 0;
      this.mostrarEjemplo = true;
      this.propioCuerpo = false;
    } else {
      if (entrada == 0) {
        this.respuesta[this.valor] = 'Negativo';
        console.log(this.respuesta[this.valor]);
        this.valor = this.valor + 1;
        this.errores = this.errores + 1;
      } else {
        console.log(this.respuesta[this.valor]);
        this.respuesta[this.valor] = 'Positivo';
        this.valor = this.valor + 1;
      }
    }

  }

  siguiente1(entrada: number) {
    if (this.valor + 1 == 4) {
      if (entrada == 0) {
        this.respuestaE[this.valor] = 'Negativo';
        console.log(this.respuestaE[this.valor]);
        this.erroresE = this.erroresE + 1;
      } else {
        this.respuestaE[this.valor] = 'Positivo';
      }
      this.valor = 0;
      this.mostrarEjemplo = true;
      this.espejo = false;
    } else {
      if (entrada == 0) {
        this.respuestaE[this.valor] = 'Negativo';
        console.log(this.respuestaE[this.valor]);
        this.erroresE = this.erroresE + 1;
        this.valor = this.valor + 1;
      } else {
        this.respuestaE[this.valor] = 'Positivo';
        console.log(this.respuestaE[this.valor]);
        this.valor = this.valor + 1;
      }
    }
  }

  siguiente2(entrada: number) {
    if (this.valor + 1 == 4) {
      if (entrada == 0) {
        this.respuestaO[this.valor] = 'Negativo';
        console.log(this.respuestaO[this.valor]);
        this.erroresO = this.erroresO + 1;
      } else {
        this.respuestaO[this.valor] = 'Positivo';
      }
      if (this.errores > 1 || this.erroresE > 1 || this.erroresO > 1) {
        this.mostrarAreaPositiva = false;
      } else if ((this.errores + this.erroresE + this.erroresO) > 3) {
        this.mostrarAreaPositiva = false;
      } else {
        this.mostrarAreaPositiva = true;
      }
      this.grafica = true;
      this.otroCuerpo = false;
    } else {
      if (entrada == 0) {
        this.respuestaO[this.valor] = 'Negativo';
        console.log(this.respuestaO[this.valor]);
        this.erroresO = this.erroresO + 1;
        this.valor = this.valor + 1;
      } else {
        this.respuestaO[this.valor] = 'Positivo';
        this.valor = this.valor + 1;
      }
    }
  }
  sumar(){

    if(this.respuesta[0]=='Negativo'){
      this.contadorNegativos1 = this.contadorNegativos1 + 1;
    }
    if(this.respuesta[1]=='Negativo'){
      this.contadorNegativos1 = this.contadorNegativos1 + 1;
    }
    if(this.respuesta[2]=='Negativo'){
      this.contadorNegativos1 = this.contadorNegativos1 + 1;
    }
    if(this.respuesta[3]=='Negativo'){
      this.contadorNegativos1 = this.contadorNegativos1 + 1;
    }
    if(this.respuestaE[0]=='Negativo'){
      this.contadorNegativos2 = this.contadorNegativos2 + 1;
    }
    if(this.respuestaE[1]=='Negativo'){
      this.contadorNegativos2 = this.contadorNegativos2 + 1;
    }
    if(this.respuestaE[2]=='Negativo'){
      this.contadorNegativos2 = this.contadorNegativos2 + 1;
    }
    if(this.respuestaE[3]=='Negativo'){
      this.contadorNegativos2 = this.contadorNegativos2 + 1;
    }
    if(this.respuestaO[0]=='Negativo'){
      this.contadorNegativos2 = this.contadorNegativos3 + 1;
    }
    if(this.respuestaO[1]=='Negativo'){
      this.contadorNegativos2 = this.contadorNegativos3 + 1;
    }
    if(this.respuestaO[2]=='Negativo'){
      this.contadorNegativos2 = this.contadorNegativos3 + 1;
    }
    if(this.respuestaO[3]=='Negativo'){
      this.contadorNegativos2 = this.contadorNegativos3 + 1;
    }
    if(this.contadorNegativos1>1){
      this.resputaA = 'Negativo';
    }
    if(this.contadorNegativos2>1){
      this.resputaB = 'Negativo';
    }
    if(this.contadorNegativos3>1){
      this.resputaC = 'Negativo';
    }
    if (this.mostrarAreaPositiva){
      this.respuestaTotal = 0;
    }

  }



  constructor(private estServ: EstudianteService) {
    this.tipoTest();
  }

  ngOnInit() {
  }



  getEstudiantes() {
    this.iniciarTs =false;
    this.mostrarDatos = true;
    this.estServ.getEstudiantes()
      .subscribe(res => {
        this.estServ.estudiantes = res as Estudiante[];
        this.any = res as Estudiante[];
        console.log(res);
        console.log("El tamanio es "+ this.any.length);
        this.estServ.selecionarEstudiante = res[this.any.length-1];
        console.log(this.estServ.selecionarEstudiante._id);
        localStorage.setItem('identificador',this.estServ.selecionarEstudiante._id);

      });

  }

  comenzar(){
    this.mostrarDatos = false;
    this.mostrarEjemplo = true;
  }


  agregarRespuestaAreaUno(){
    this.sumar();
    this.iniciarFecha();
    this.estServ.selecionarEstudiante.fecha = this.Fechita;
    this.estServ.selecionarEstudiante.tipoTest = this.tipoPrueba;
    this.estServ.selecionarEstudiante.area1Total = this.respuestaTotal;
    this.estServ.selecionarEstudiante.area1a = this.resputaA;
    this.estServ.selecionarEstudiante.area1b = this.resputaB;
    this.estServ.selecionarEstudiante.area1c = this.resputaC;

    this.estServ.putEstudiante(this.estServ.selecionarEstudiante).subscribe(res => {
      console.log(this.estServ.selecionarEstudiante);
    })
    location.href = '/#/areaDos';
  }





}
