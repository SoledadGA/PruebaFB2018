import {Component, OnInit} from '@angular/core';
import {EstudianteService} from "../../services/estudiante.service";
import {Estudiante} from "../../models/estudiante";

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css'],
  providers: [EstudianteService]
})
export class EstadisticasComponent implements OnInit {

  identificador1 = localStorage.getItem('tipoE');
  identificador2 = localStorage.getItem('anioE');
  identificador3 = localStorage.getItem('paraleloE');
  any = [];
  cabecera = 'imagenes/estadisticas/1.png';
  botonImprimir = 'imagenes/formulario/imprimir.png';
  mostrarPantallaPrincipal = true;
  mostrarCuadro1 = false;
  mostrarGrafico1 = false;
  mostrarCuadro2 = false;
  mostrarBotonRegresar = false;
  mostrarCabecera = true;
  tipoDeTest = 5 ;

  regresar(){
    this.mostrarPantallaPrincipal =true;
    this.mostrarBotonRegresar =false;
    this.mostrarGrafico1 = false;
    this.mostrarCuadro1 = false;
    this.mostrarCuadro2 =false;
    this.mostrarCabecera = true;
  }
  verCuadro1(){
    this.mostrarPantallaPrincipal = false;
    this.mostrarCuadro1 = true;
    this.mostrarBotonRegresar = true;
    this.mostrarCabecera = false;
  }
  verCuadro2(){
    this.mostrarPantallaPrincipal = false;
    this.mostrarCuadro2 = true;
    this.mostrarBotonRegresar = true;
    this.mostrarCabecera = false;
  }
  verGrafico1(){
    this.mostrarPantallaPrincipal = false;
    this.mostrarGrafico1 = true
    this.mostrarBotonRegresar = true;
    this.mostrarCabecera = false;
  }

  bucarVariables(){
    if(this.identificador1=='0'){
      this.tipoDeTest = 0;
    }else {
      this.tipoDeTest = 1 ;
    }
  }

  getEstudiantes() {
    this.bucarVariables()
    this.estServ.estadisticasEstudiantes(this.tipoDeTest,this.identificador3,this.identificador2)
      .subscribe(res => {
        this.estServ.estudiantes = res as Estudiante[];
        this.any = res as Estudiante[];
        console.log(res);
        console.log("El tamanio es "+ this.any.length);
        this.estServ.selecionarEstudiante = res[this.any.length-1];
        console.log(this.estServ.selecionarEstudiante._id);
        //localStorage.setItem('identificador',this.estServ.selecionarEstudiante._id);
      });

  }







  imprimir() {
    if (window.print) {
      window.print();
    }
  }
  constructor(private estServ: EstudianteService) {
    console.log(
      '\nel tipo de test es:' + this.identificador1
      +'\nel tipo de anio es:' + this.identificador2
      +'\nel paralelo es:' + this.identificador3
    );

    this.getEstudiantes();
  }


  ngOnInit() {
  }
}
