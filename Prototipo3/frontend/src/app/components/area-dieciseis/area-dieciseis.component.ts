import {Component, OnInit} from '@angular/core';
import {EstudianteService} from "../../services/estudiante.service";
import {Estudiante} from "../../models/estudiante";

@Component({
  selector: 'app-area-dieciseis',
  templateUrl: './area-dieciseis.component.html',
  styleUrls: ['./area-dieciseis.component.css'],
  providers: [EstudianteService]
})
export class AreaDieciseisComponent implements OnInit {

  identificador = localStorage.getItem('identificador');
  cabecera = 'imagenes/cabeceras/CabeceraArea16.png';
  contador_segundos = 60;
  contador_segundos_papel = 60;
  mostrar_alarma = false;
  imagen_cronometro = 'imagenes/area16/cronometro.png';
  alarma = 'audio/area16/alarma.mpeg';
  mostrar_mensaje = false;
  indicacion = 'Diagnostica atención y fatiga. Esta área se puede realizar tanto' +
    ' en la computadora como en el papel, queda a criterio del evaluador.';
  mostrar_botones_cronometro = true;
  mensaje = 'Se terminó el tiempo.';
  mostrar_ejemplo = false;
  mostrar_cronometro_papel = true;
  recorrer = 0;
  recorrerE = 0;
  arreglo = [];
  arreglo1 = [];
  texto_ejemplo = 'Mira y has clic en cada cuadro lo más rápido que puedas. De izquierda a derecha' +
    ' y de arriba hacia abajo, sin saltarte ningún cuadro.';
  audio = 'audio/area16/instruccion.mp3';
  mostrar_ejercicio_en_computadora = false;
  mostrar_ejercicio_en_papel = true;
  elegir_opcion = false;
  mostrar_respuesta = false;
  resultados = 'Resultados';
  cronometro_iniciado = false;
  respuesta_computadora = false;
  mostrar_respuesta_papel = false;
  texto_papel = 'Mira y pon un punto en cada cuadro lo más rápido que puedas.';
  texto_computadora = 'Se acredita como área positiva, cuando vence más de 50 puntos en el tiempo asignado (un minuto).';
  mensaje_computadora = 'Se considera como área negativa.';
  respuesta_papel = 1;
  respuestaFinal = 'Área Debilitada';
  mensaje_papel = 'Diagnostica atención y fatiga.\n';
  mensaje_papel_2 = 'Se debe realizar de izquierda a derecha y de arriba hacia abajo.\n' +
    'No se admite que haga bombas o rallas, además no debe saltarse cuadros.';


  siguientePregunta(numero: number) {
    this.mostrar_respuesta = true;
    this.mostrar_ejercicio_en_papel = false;
    this.mostrar_respuesta_papel = true;
    this.getEstudiante();
    if (numero == 1){
      this.respuesta_papel = 0;
      this.respuestaFinal = 'Área Positiva'
    }
  }
  terminar_ejemplo() {
    this.mostrar_ejemplo = false;
    this.elegir_opcion = true;
  }
  prueba_en_computadora() {
    this.elegir_opcion = false;
    this.mostrar_ejercicio_en_computadora = true;
  }
  prueba_en_papel() {
    this.elegir_opcion = false;
    this.mostrar_ejercicio_en_papel = true;
  }
  funcionClic(posicion: number ) {
    if (this.recorrer + 1 == 1){
      if(!this.cronometro_iniciado){
        alert('Sigue las instrucciones como está en el ejemplo.');
      }
    }
    // if (this.recorrer + 1 == 50){
    //   this.mostrar_ejercicio_en_computadora = false;
    //   this.mostrar_respuesta = true;
    // }
    if (this.recorrer + 1 == posicion) {
      this.arreglo[this.recorrer] = '.';
      this.recorrer = this.recorrer + 1;
    }
    console.log(this.recorrer);
  }
  funcionClicE(posicion: number ) {
    if (this.recorrerE + 1 == posicion) {
      this.arreglo1[this.recorrerE] = '.';
      this.recorrerE = this.recorrerE + 1;
    }
  }
  cargar() {
    this.cronometro_iniciado = true;
    this.respuesta_computadora = true;
    window.setInterval(
      () => {
        this.contador_segundos = this.contador_segundos - 1;
        if (this.recorrer >= 50) {
          this.mensaje_computadora = 'Se considera como área positiva.';
          console.log('Area Posi');
        }
        if (this.contador_segundos ==  0) {
          this.mostrar_mensaje = true;
          this.mostrar_ejercicio_en_computadora = false;
          this.mostrar_respuesta = true;
        }
      },
      1000);
  }
  cronometroPapel() {
    this.mostrar_botones_cronometro = false;
    this.mostrar_respuesta_papel = true;
    window.setInterval(
      () => {
        this.contador_segundos_papel = this.contador_segundos_papel - 1 ;
        if (this.contador_segundos_papel ==  0) {
          this.mostrar_alarma = true;
          this.mostrar_cronometro_papel = false;
        }
      },
      1000);
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

  agregarRespuestaAreaDieciseis(){

    this.estServ.selecionarEstudiante.area16Total = this.respuesta_papel;


    this.estServ.putEstudiante(this.estServ.selecionarEstudiante).subscribe(res => {
      console.log(this.estServ.selecionarEstudiante);
    })
    location.href = '/#/areaDiecisiete';
  }

  constructor(private estServ: EstudianteService) {
  }

  ngOnInit() {
  }

}
