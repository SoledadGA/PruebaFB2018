import {Component, OnInit} from '@angular/core';
import {EstudianteService} from "../../services/estudiante.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-ingresar-datos',
  templateUrl: './ingresar-datos.component.html',
  styleUrls: ['./ingresar-datos.component.css'],
  providers: [EstudianteService]
})
export class IngresarDatosComponent implements OnInit {
  anioEGB = ['Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto'];
  fecha = new Date();
  txtFecha = (this.fecha.getDate() + '/' + (this.fecha.getMonth() + 1) + '/' + (this.fecha.getFullYear()));
  anioLectivo = [this.fecha.getFullYear() - 1, this.fecha.getFullYear()];


  constructor(private estServ: EstudianteService) {
  }

  ngOnInit() {
  }
  guardar(form: NgForm) {
    console.log(form.value);
    this.estServ.postEstudiante(form.value).subscribe(res => {
      console.log(res)
    });
    location.href = '/#/areaUno';
  }

}
