import {Component, OnInit} from '@angular/core';
import {EstudianteService} from "../../services/estudiante.service";
import {Estudiante} from "../../models/estudiante";

@Component({
  selector: 'app-area-tres-espacial',
  templateUrl: './area-tres-espacial.component.html',
  styleUrls: ['./area-tres-espacial.component.css'],
  providers: [EstudianteService]
})
export class AreaTresEspacialComponent implements OnInit {

  identificador = localStorage.getItem('identificador');
  valor = 0;
  errores = 0;
  mostrarIndicacion = true;
  mostrarSilla = true;
  mostrarSonido = true;
  mostrarAreaPositiva = false;
  cabecera = 'imagenes/cabeceras/CabeceraArea3.png';
  errorAudio = 'Tu navegador no implementa el elemento audio.';
  areaDebilitada = 'Se considera como área debilitada.';
  areaPositiva = 'Se considera como área positiva.';
  titulo = 'Orientación Espacial.';
  indicacion = 'Mide orientación espacial (arriba, debajo, adelante, detrás).';
  audio = [
    'audio/area3/5.mp3',
    'audio/area3/6.mp3',
    'audio/area3/7.mp3',
    'audio/area3/8.mp3'];
  instruccion = [
    'Señala la pelota que está arriba de la silla.',
    'Señala la pelota que está debajo de la silla.',
    'Señala la pelota que está adelante de la silla.',
    'Señala la pelota que está detrás de la silla.'];
  respuesta = [];
  respuestaTotal = 'Área Negativa';

  siguiente(entrada: number) {
    this.mostrarIndicacion = false;
    if (this.valor + 1 == 4) {
      if (entrada != this.valor) {
        this.respuesta[this.valor] = 'Negativo';
        this.errores = this.errores + 1;
        console.log('negativo');
        this.mostrarSilla = false;
        this.mostrarSonido = false;
      } else {
        console.log('positivo');
        this.respuesta[this.valor] = 'Positivo';
        this.mostrarSilla = false;
        this.mostrarSonido = false;
      }
      if (this.errores > 1) {
        this.mostrarAreaPositiva = false;
      } else {
        this.mostrarAreaPositiva = true;
      }
    }
    if (entrada != this.valor) {
      this.respuesta[this.valor] = 'Negativo';
      this.errores = this.errores + 1;
      console.log('negativo');
    } else {
      this.respuesta[this.valor] = 'Positivo';
      console.log('positivo');
    }
    if (this.valor == 1){
      this.getEstudiante();
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
  sumar2(){
    if(this.estServ.selecionarEstudiante.aera3TemporalTotal == 'Área Negativa'){
      this.estServ.selecionarEstudiante.area3Total = 1;
    }
    if(this.estServ.selecionarEstudiante.aera3EspacialTotal == 'Área Negativa'){
      this.estServ.selecionarEstudiante.area3Total = 1;
    }
  }

  agregarRespuestaAreaTresEspacial(){
    this.sumar();
    this.estServ.selecionarEstudiante.aera3EspacialTotal = this.respuestaTotal;
    this.estServ.selecionarEstudiante.area3Ea = this.respuesta[0];
    this.estServ.selecionarEstudiante.area3Eb = this.respuesta[1];
    this.estServ.selecionarEstudiante.area3Ec = this.respuesta[2];
    this.estServ.selecionarEstudiante.area3Ed = this.respuesta[3];
    this.estServ.selecionarEstudiante.area3Total = 0;
    this.sumar2();

    this.estServ.putEstudiante(this.estServ.selecionarEstudiante).subscribe(res => {
      console.log(this.estServ.selecionarEstudiante);
    })
    location.href = '/#/areaCuatro';
  }


  sumar(){
    if(this.mostrarAreaPositiva){
      this.respuestaTotal = 'Área Positiva';
    }
  }

  constructor(private estServ: EstudianteService) {

  }

  ngOnInit() {
  }

}
