import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  valor = 0;
  anioLectivo = 2017;
  imagenCabecera = 'imagenes/logo4.png';
  cabecera1 = 'UNIDAD EDUCATIVA MUNICIPAL EXPERIMENTAL “ANTONIO JOSÉ DE SUCRE”';
  cabecera2 = 'AÑO LECTIVO:';
  cabecera3 = 'PRUEBA DE FUNCIONES BÁSICAS';
  datos = [
    'Nombre:',
    'Año de E.G.B.:',
    'Fecha:',
    'Paralelo:',
    'Nombre quién aplica la prueba:'];
  datosRetest = [
    'Nombre:',
    'Año de E.G.B.:',
    'Fecha:',
    'Paralelo:',
    'Nombre quién aplica la prueba:'];
  respuesta = ['Tania Soledad Gallardo Andrade', 'Primero', '19/12/2018', 'A', 'Zoila Yolanda Andrade Arévalo'];
  tituloAreas = [
    'ÁREA I: ESQUEMA CORPORAL',
    'ÁREA II: DOMINANCIA LATERAL',
    'ÁREA III: ORIENTACIÓN',
    'ÁREA IV: COORDINACIÓN DINÁMICA',
    'ÁREA V: RECEPTIVA AUDITIVA',
    'ÁREA VI: RECEPTIVO VISUAL',
    'ÁREA VII: ASOCIACIÓN AUDITIVA',
    'ÁREA VIII: EXPRESIVO MANUAL',
    'ÁREA IX: CIERRE AUDITIVO VOCAL',
    'ÁREA X: PRONUNCIACIÓN',
    'ÁREA XI: MEMORIA SECUENCIA AUDITIVA',
    'ÁREA XII: COORDINACIÓN VISUAL – AUDITIVA – MOTORA (RITMO)',
    'ÁREA XIII: MEMORIA VISUAL',
    'ÁREA XIV: DISCRIMINACIÓN AUDITIVA',
    'ÁREA XV: COORDINACIÓN VISOMOTORA',
    'ÁREA XVI: ATENCIÓN Y FATIGA',
    'ÁREA XVII: DESARROLLO MANUAL'];
  calificacion = [
    'Se considera como área positiva',
    'Se considera como área debilitada',
    'Se considera como área positiva',
    'Se considera como área debilitada',
    'Se considera como área positiva',
    'Se considera como área debilitada',
    'Se considera como área positiva',
    'Se considera como área debilitada',
    'Se considera como área positiva',
    'Se considera como área debilitada',
    'Se considera como área positiva',
    'Se considera como área debilitada',
    'Se considera como área positiva',
    'Se considera como área debilitada',
    'Se considera como área positiva',
    'Se considera como área debilitada',
    'Se considera como área positiva'];
  subtituloArea3 = [
    'Temporal:',
    'Espacial:'];
  respuestasArea1 = [
    'Positivo',
    'Positivo',
    'Positivo'];
  respuestasArea2 = [
    'Negativo',
    'Negativo',
    'Negativo',
    'Negativo'];
  respuestasArea3T = [
    'Positivo',
    'Positivo',
    'Positivo',
    'Positivo'];
  respuestasArea3E = [
    'Negativo',
    'Negativo',
    'Negativo',
    'Negativo'];
  respuestasArea4 = [
    'Positivo',
    'Positivo'];
  respuestasArea5 = [
    'Negativo',
    'Negativo',
    'Negativo',
    'Negativo',
    'Negativo',
    'Negativo',
    'Negativo',
    'Negativo',
    'Negativo',
    'Negativo',
    'Negativo',
    'Negativo',
    'Negativo',
    'Negativo',
    'Negativo'];
  respuestasArea6 = [
    'Positivo',
    'Positivo',
    'Positivo',
    'Positivo'];
  respuestasArea7 = [
    'Negativo',
    'Negativo',
    'Negativo',
    'Negativo',
    'Negativo',
    'Negativo',
    'Negativo',
    'Negativo',
    'Negativo',
    'Negativo'];
  respuestasArea8 = [
    'Positivo',
    'Positivo',
    'Positivo',
    'Positivo',
    'Positivo',
    'Positivo',
    'Positivo',
    'Positivo'];
  respuestasArea9 = [
    'Negativo',
    'Negativo',
    'Negativo',
    'Negativo',
    'Negativo'];
  respuestasArea10 = [
    'Positivo',
    'Positivo',
    'Positivo',
    'Positivo',
    'Positivo',
    'Positivo'];
  respuestasArea11 = [
    'Negativo',
    'Negativo',
    'Negativo',
    'Negativo',
    'Negativo',
    'Negativo',
    'Negativo',
    'Negativo',
    'Negativo',
    'Negativo'];
  respuestasArea12 = [
    'Positivo',
    'Positivo',
    'Positivo',
    'Positivo',
    'Positivo',
    'Positivo',
    'Positivo'];
  respuestasArea13 = [
    'Negativo',
    'Negativo',
    'Negativo'];
  respuestasArea14 = [
    'Positivo',
    'Positivo',
    'Positivo',
    'Positivo',
    'Positivo',
    'Positivo',
    'Positivo',
    'Positivo',
    'Positivo',
    'Positivo'];
  respuestasArea15 = [
    'Negativo',
    'Negativo',
    'Negativo'];
  respuestasArea16 = [
    'Positivo'];
  respuestasArea17 = [
    'Negativo',
    'Negativo'];

  imprimir() {
    if (window.print) {
      window.print();
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
