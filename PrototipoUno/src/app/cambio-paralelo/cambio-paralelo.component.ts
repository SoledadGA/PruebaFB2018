import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cambio-paralelo',
  templateUrl: './cambio-paralelo.component.html',
  styleUrls: ['./cambio-paralelo.component.css']
})
export class CambioParaleloComponent implements OnInit {

  nombre = 'Tania Soledad Gallardo Andrade';
  paralelo;

  guardar() {
    location.href = '/#/nominaParalelo';
    console.log('Nombre: ' + this.nombre);
    console.log('Paralelo: ' + this.paralelo);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
