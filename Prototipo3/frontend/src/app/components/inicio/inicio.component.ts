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
  anio = '';
  cuadernillo ='imagenes/hojaCuadernillo.pdf';
  anioLectivo = ['2018 - 2019', '2019 - 2020' , '2020 - 2021'];
  cursos = ['A', 'B', 'C', 'D', 'E','F'];
  images = ['imagenes/inicio/1.png', 'imagenes/inicio/2.png', 'imagenes/inicio/3.png'];
  imagen = ['imagenes/inicio/4.png', 'imagenes/inicio/5.png' , 'imagenes/inicio/6.jpg'];
  imagenTestI = 'imagenes/inicio/7.png';
  imagenTestF = 'imagenes/inicio/8.png';
  title = ['imagenes/inicio/9.png','imagenes/inicio/10.png', 'imagenes/inicio/11.png'];

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


  constructor() { }

  ngOnInit() {
  }

}
