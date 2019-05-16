import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  anioLectivo = ['2018 - 2019', '2019 - 2020' , '2020 - 2021'];
  cursos = ['Paralelo A', 'Paralelo B', 'Paralelo C', 'Paralelo D'];
  images = ['imagenes/inicio/1.png', 'imagenes/inicio/2.png', 'imagenes/inicio/3.png'];
  imagen = ['imagenes/inicio/4.png', 'imagenes/inicio/5.png' , 'imagenes/inicio/6.jpg'];

  iniciarTest(){
    localStorage.setItem('tipoTest', 'test');
    location.href = '/#/ingresarDatos';
  }
  iniciarReTest(){
    localStorage.setItem('tipoTest', 'reTest');
    location.href = '/#/ingresarDatos';
  }

  constructor() { }

  ngOnInit() {
  }

}
