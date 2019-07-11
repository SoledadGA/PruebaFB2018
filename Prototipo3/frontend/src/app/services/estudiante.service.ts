import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Estudiante} from "../models/Estudiante";

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  selecionarEstudiante: Estudiante;
  estudiantes: Estudiante[];
  readonly URL_API = 'http://localhost:3000/api/estudiante';

  constructor(private http: HttpClient) {
    this.selecionarEstudiante = new Estudiante();
  }

  getEstudiantes() {
    return this.http.get(this.URL_API);
  }

  postEstudiante(estudiante: Estudiante) {
    return this.http.post(this.URL_API, estudiante);
  }

  putEstudiante(estudiante: Estudiante) {
    return this.http.put(this.URL_API + `/${estudiante._id}`, estudiante);
  }

  deleteEmployee(_id: String) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
  getEstudiantebyID(id : String){
    return this.http.get(this.URL_API + "/" + id);
  }
  estadisticasEstudiantes(tipoTest : number , paralelo : String, _anioLectivo : String){
    console.log(this.URL_API + "/" + tipoTest + "/" + paralelo + "/" + _anioLectivo);
    console.log(this.URL_API + "/" + tipoTest + "/" + paralelo+ `/${_anioLectivo}`)
    return this.http.get(this.URL_API + "/" + tipoTest + "/" + paralelo+ `/${_anioLectivo}`);

  }
  estadisticasTipoTest(tipoTest : number , _anioLectivo : String){
    console.log(this.URL_API + "/" + tipoTest +"/" + _anioLectivo);
    console.log(this.URL_API + "/" + tipoTest + `/${_anioLectivo}`)
    return this.http.get(this.URL_API + "/" + tipoTest + `/${_anioLectivo}`);

  }

}
