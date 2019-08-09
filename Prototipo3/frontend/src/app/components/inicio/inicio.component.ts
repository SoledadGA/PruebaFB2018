import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  panelOpenState = false;
  panel2 = false;
  panel3 =  false;
  panel4 =  false;
  panel5 =  false;
  panel6 =  false;
  fecha = new Date();
  prepararAnio = (this.fecha.getFullYear());
  anio = '';
  cuadernillo =['imagenes/hojaCuadernillo.pdf'
    ,'https://educacion.gob.ec/wp-content/uploads/downloads/2016/06/MANUAL-PRUEBA-FUNCIONES-BASICAS-EBSF_2105.pdf', '/#/ayuda'];
  anioLectivo = ['2018 - 2019', '2019 - 2020'];

  cursos = ['A', 'B', 'C', 'D', 'E','F'];
  images = ['imagenes/inicio/1.png', 'imagenes/inicio/2.png', 'imagenes/inicio/3.png'];
  imagen = ['imagenes/inicio/4.png', 'imagenes/inicio/5.png' , 'imagenes/inicio/6.jpg'];
  imagenTestI = 'imagenes/inicio/7.png';
  imagenTestF = 'imagenes/inicio/8.png';
  title = ['imagenes/inicio/9.png','imagenes/inicio/10.png', 'imagenes/inicio/11.png'];

  validadAnios(){

    if (this.prepararAnio >= 2020){
      this.anioLectivo[2]='2020 - 2021'
    }
    if (this.prepararAnio >= 2021){
      this.anioLectivo[3]='2021 - 2022'
    }
    if (this.prepararAnio >= 2022){
      this.anioLectivo[4]='2022 - 2023'
    }
    if (this.prepararAnio >= 2023){
      this.anioLectivo[5]='2023 - 2024'
    }
    if (this.prepararAnio >= 2024){
      this.anioLectivo[6]='2024 - 2025'
    }
    if (this.prepararAnio >= 2025){
      this.anioLectivo[7]='2025 - 2026'
    }
  }
  iniciarTest(){
    localStorage.setItem('tipoTest', 'test');
    location.href = '/#/ingresarDatos';
  }
  iniciarReTest(){
    localStorage.setItem('tipoTest', 'reTest');
    location.href = '/#/ingresarDatos';
  }
  iniciarFreeTest(){
    localStorage.setItem('tipoTest', 'freeTest');
    location.href = '/#/ingresarDatos';
  }
  getAnio(anio : string){
    this.anio = anio;
  }
  irEstadisticas(tipo: string,anio: string, paralelo:string){
    localStorage.setItem('tipoE', tipo);
    localStorage.setItem('anioE', anio);
    localStorage.setItem('paraleloE', paralelo);
    location.href = '/#/estadisticas';
  }
  irEstadisticasLibre(tipo: string,anio: string){
    localStorage.setItem('tipoE', tipo);
    localStorage.setItem('anioE', anio);
    location.href = '/#/estadisticasFree';
  }



  constructor() {
    this.validadAnios();
  }

  ngOnInit() {
  }

}
