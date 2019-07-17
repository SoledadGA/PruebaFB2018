import {Component, OnInit} from '@angular/core';
import {EstudianteService} from "../../services/estudiante.service";
import {Estudiante} from "../../models/estudiante";


@Component({
  selector: 'app-estadisticas-free',
  templateUrl: './estadisticas-free.component.html',
  styleUrls: ['./estadisticas-free.component.css']
})
export class EstadisticasFreeComponent implements OnInit {

  identificadorPrueba = localStorage.getItem('tipoTest');
  anioLectivo = localStorage.getItem('anioE');
  imagenCabecera = 'imagenes/logo4.png';
  botonImprimir = 'imagenes/formulario/imprimir.png';
  cabecera1 = 'UNIDAD EDUCATIVA MUNICIPAL EXPERIMENTAL “ANTONIO JOSÉ DE SUCRE”';
  cabecera2 = 'AÑO LECTIVO:';
  cabecera3 = 'RESULTADOS PRUEBA DE FUNCIONES BÁSICAS';
  cabecera4 = 'PRUEBA LIBRE';
  subtitulo = 'Lista estudiantes';
  tipoPrueba = 0;
  color='colores1';
  any = [];
  tamanio = 0;
  listaEstudiantes: any[];
  columnasCuadro1: any[] = ['nombre', 'curso', 'paralelo'];

  getEstudiantes() {
    this.estServ.estadisticasTipoTest(this.tipoPrueba, this.anioLectivo)
      .subscribe(res => {
        this.estServ.estudiantes = res as Estudiante[];
        this.listaEstudiantes = res as Estudiante[];
        console.log(res);
        console.log("El tamanio es " + this.any.length);
        this.estServ.selecionarEstudiante = res[this.any.length - 1];
        this.tamanio = this.any.length;
        console.log('El lenght es:' + this.tamanio);
        //console.log(this.estServ.selecionarEstudiante._id);
        //localStorage.setItem('identificador',this.estServ.selecionarEstudiante._id);
      });

  }

  verificarDiscapacidad(entrada: number){
    if(entrada == 1 ){
      this.color = 'colores';
    }else{
      this.color = 'colores1';
    }
  }

  tipoTest() {
    if (this.identificadorPrueba == 'reTest') {
      this.tipoPrueba = 1;
    }
    if (this.identificadorPrueba == 'freeTest') {
      this.tipoPrueba = 2;
    }
  }

  irFormulario(texto: string) {
    localStorage.setItem('identificador', texto);
    location.href = '/#/formulario';
  }

  imprimir() {
    if (window.print) {
      window.print();
    }
  }

  regresar() {
    location.href = '/#/home';
  }

  constructor(private estServ: EstudianteService) {
    this.tipoTest();
    this.getEstudiantes();
  }

  ngOnInit() {
  }

}
