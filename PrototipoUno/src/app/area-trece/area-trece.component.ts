import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-area-trece',
  templateUrl: './area-trece.component.html',
  styleUrls: ['./area-trece.component.css']
})
export class AreaTreceComponent implements OnInit {

  parteUno = true;
  parteDos = false;
  parteTres = false;
  mostrarUno = false;
  mostrarDos = false;
  mostrarTres = false;
  mostrarResultado = false;
  resultadoArea = 'Se considera como área negativa';
  numeroNivel = 0;
  queDiagnostica = 'Diagnóstica la memoria visual.';
  instruccion = 'Mira como estan ordenados estos dibujos, luego los desordenaré y tú los ordenarás.';
  primeraParte = [
    'imagenes/area13/1.png',
    'imagenes/area13/2.png',
    'imagenes/area13/3.png'
  ];
  timePeriods = [
    'imagenes/area13/3.png',
    'imagenes/area13/1.png',
    'imagenes/area13/2.png'
  ];
  segundaParte = [
    'imagenes/area13/1.png',
    'imagenes/area13/2.png',
    'imagenes/area13/3.png',
    'imagenes/area13/4.png',
    'imagenes/area13/5.png'
  ];
  timePeriods2 = [
    'imagenes/area13/2.png',
    'imagenes/area13/5.png',
    'imagenes/area13/3.png',
    'imagenes/area13/4.png',
    'imagenes/area13/1.png'
  ];
  terceraParte = [
    'imagenes/area13/1.png',
    'imagenes/area13/2.png',
    'imagenes/area13/3.png',
    'imagenes/area13/4.png',
    'imagenes/area13/5.png',
    'imagenes/area13/6.png',
    'imagenes/area13/7.png',
    'imagenes/area13/8.png'
  ];
  timePeriods3 = [
    'imagenes/area13/5.png',
    'imagenes/area13/7.png',
    'imagenes/area13/1.png',
    'imagenes/area13/6.png',
    'imagenes/area13/8.png',
    'imagenes/area13/2.png',
    'imagenes/area13/4.png',
    'imagenes/area13/3.png'
  ];
  audio = 'audio/area13/instruccion.mp3';

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);

  }

  drop1(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.timePeriods2, event.previousIndex, event.currentIndex);

  }

  drop2(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.timePeriods3, event.previousIndex, event.currentIndex);

  }

  iniciarUno() {
    this.parteUno = false;
    this.mostrarUno = true;
  }

  calificarUno() {
    this.mostrarUno = false;
    if (this.primeraParte[0] == this.timePeriods[0]) {
      if (this.primeraParte[1] == this.timePeriods[1]) {
        this.parteDos = true;
        console.log('true');
        this.numeroNivel = this.numeroNivel + 1;
      } else {
        this.mostrarResultado = true;
        console.log('false');
      }
    } else {
      this.mostrarResultado = true;
      console.log('false');
    }
  }

  iniciarDos() {
    this.parteDos = false;
    this.mostrarDos = true;
  }

  calificarDos() {
    this.mostrarDos = false;
    if (this.segundaParte [0] == this.timePeriods2[0]) {
      console.log('1 si');
      if (this.segundaParte [1] == this.timePeriods2[1]) {
        console.log('2 si');
        if (this.segundaParte [2] == this.timePeriods2[2]) {
          console.log('3 si');
          if (this.segundaParte [3] == this.timePeriods2[3]) {
            console.log('4 si');
            if (this.segundaParte [4] == this.timePeriods2[4]) {
              this.parteTres = true;
              this.numeroNivel = this.numeroNivel + 1;
              console.log('Parte dos True');
            } else {
              this.mostrarResultado = true;
            }
          } else {
            this.mostrarResultado = true;
          }
        } else {
          this.mostrarResultado = true;
        }

      } else {
        this.mostrarResultado = true;
      }
    } else {
      this.mostrarResultado = true;
    }
  }

  iniciarTres() {
    this.parteTres = false;
    this.mostrarTres = true;
  }

  calificarTres() {
    this.mostrarTres = false;
    if (this.terceraParte[0] == this.timePeriods3[0]) {
      if (this.terceraParte[1] == this.timePeriods3[1]) {
        if (this.terceraParte[2] == this.timePeriods3[2]) {
          if (this.terceraParte[3] == this.timePeriods3[3]) {
            if (this.terceraParte[4] == this.timePeriods3[4]) {
              if (this.terceraParte[5] == this.timePeriods3[5]) {
                if (this.terceraParte[6] == this.timePeriods3[6]) {
                  if (this.terceraParte[7] == this.timePeriods3[7]) {
                    this.numeroNivel = this.numeroNivel + 1;
                    this.resultadoArea = 'Se considera área positiva';
                    this.mostrarResultado = true;
                  } else {
                    this.mostrarResultado = true;
                  }
                } else {
                  this.mostrarResultado = true;
                }
              } else {
                this.mostrarResultado = true;
              }
            } else {
              this.mostrarResultado = true;
            }
          } else {
            this.mostrarResultado = true;
          }
        } else {
          this.mostrarResultado = true;
        }
      } else {
        this.mostrarResultado = true;
      }
    } else {
      this.mostrarResultado = true;
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
