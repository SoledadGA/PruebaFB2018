import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area1',
  templateUrl: './area1.component.html',
  styleUrls: ['./area1.component.css']
})
export class Area1Component implements OnInit {

  valor=0;
  listaPreguntas=['Señala tu boca','Señala tu nariz', 'Señala tus ojos', 'Señala tu dedo'];

  siguientePregunta() {
    do{
      this.valor = this.valor + 1;
    }while (this.valor>3);
  }

  constructor() { }

  ngOnInit() {
  }

}
