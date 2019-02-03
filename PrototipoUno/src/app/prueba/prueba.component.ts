import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  anioLectivo = ['2018 - 2019', '2019 - 2020' , '2020 - 2021'];
  cursos = ['Paralelo A', 'Paralelo B', 'Paralelo C', 'Paralelo D'];
  images = ['imagenes/inicio/1.png', 'imagenes/inicio/2.png', 'imagenes/inicio/3.png'];
  constructor() { }

  ngOnInit() {
  }

}
