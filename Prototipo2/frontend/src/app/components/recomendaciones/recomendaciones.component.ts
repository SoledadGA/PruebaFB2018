import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.css']
})
export class RecomendacionesComponent implements OnInit {

  valor = 0;
  anioLectivo = 2017;
  imagenCabecera = 'imagenes/logo4.png';
  cabecera1 = 'UNIDAD EDUCATIVA MUNICIPAL EXPERIMENTAL “ANTONIO JOSÉ DE SUCRE”';
  cabecera2 = 'AÑO LECTIVO:';
  cabecera3 = 'SUGERENCIAS DE ACTIVIDADES PARA RECUPERACIÓN';
  datos = [
    'Nombre:',
    'Año de E.G.B.:',
    'Paralelo:'];
  estudiante = [
    'Tania Soledad Gallardo Andrade',
    'Primero',
    'A'];
  areas = [
    'I. Esquema Corporal', 'II. Dominancia Lateral', 'III. Orientación Temporal y Espacial',
    'IV. Coordinación Dinámica', 'V. Receptiva Auditiva',
    'VI. Receptivo Visual', 'VII. Asociación Auditiva', 'VIII. Expresivo Manual',
    'IX. Cierre Auditivo Vocal', 'X. Pronunciación', 'XI. Memoria Secuencia Auditiva',
    'XII. Coordinación Visual - Auditivo - Motora (Ritmo)',
    'XIII. Memoria Visual', 'XIV. Discriminación Auditiva',
    'XV. Coordinación Visomotora', 'XVI. Atención y Fatiga', 'XVII. Desarrollo Manual'];
  sugerenciasArea1 = [
    'Señalar y localizar las partes gruesas de su cuerpo: cabeza, tronco y extremidades.',
    'Manipular partes de la cabeza: pelo, ojos, boca, oído, cuello, pestañas, cejas.',
    'Nombrar y precisar: segmentos del tronco, espalda hombros, abdomen.',
    'Cualquier otra actividad que el profesor/ra conozca y considere pertinente para afianzar esta destreza.'];
  sugerenciasArea2 = [
    'Identificar en su propio cuerpo el lado derecho e izquierdo.',
    'Señalar en un compañero el lado derecho e izquierdo.',
    'Señalar en un espejo el lado derecho e izquierdo de su imagen.',
    'Realizar ejercicios unilaterales: con tu mano derecha topa tu pie derecho.',
    'Realizar ejercicios simultáneos cruzados: con tu mano derecha topa tu pie izquierdo.',
    'Lectura de láminas de izquierda a derecha; de arriba a bajo.',
    'Trazo de líneas horizontales, verticales y con cambios de dirección.',
    'Cualquier otra actividad que el profesor/ra conozca y considere pertinente para afianzar esta destreza.'];
  sugerenciasArea3 = [
    'Enseñar los meses del año, las horas y los días.',
    'Caminar hacia delante, y hacia atrás, derecha e izquierda.',
    'Trazo de figuras en una hoja: Trazar un círculo en la parte superior de la hoja; etc.',
    'Cualquier otra actividad que el profesor/ra conozca y considere pertinente para afianzar esta destreza.'];
  sugerenciasArea4 = [
    'Gatear, andar en un solo pie, pararse en un solo pie, saltar la soga.',
    'Brincar alternando los pies, lanzar la pelota a otro compañero.',
    'Juego en círculo entre varios niños/as lanzándose la pelota.',
    'Cualquier otra actividad que el profesor/ra conozca y considere pertinente para afianzar esta destreza.'];
  sugerenciasArea5 = [
    'Repetir trabalenguas. Canciones. Adivinanzas.',
    'Juego del teléfono dañado. Juego don Simón dice.',
    'Cualquier otra actividad que el profesor/ra conozca y considere pertinente para afianzar esta destreza.'];
  sugerenciasArea6 = [
    'Ejercicios de figura fondo.',
    'Presentar una imagen y pedir que narren un cuento.',
    'Presentar dos dibujos iguales solo que en uno de ellos le faltan algunas partes. Pedir que señalen las partes que le faltan.',
    'Cualquier otra actividad que el profesor/ra conozca y considere pertinente para afianzar esta destreza.'];
  sugerenciasArea7 = [
    'Dar el nombre de objetos, juguetes, muebles y repetirlos en el mismo orden.',
    'Dar una serie de números y que el alumno/a las repita en forma ascendente y descendente.\n' +
    'Ejemplo 1: cama, silla, mesa.\n' +
    'Ejemplo 2: pizarrón, tizas, borrador, campana.\n' +
    'Ejemplo 3: cuaderno, libro, lápiz, esfero, regla.\n',
    'Cualquier otra actividad que el profesor/ra conozca y considere pertinente para afianzar esta destreza.'];
  sugerenciasArea8 = [
    'Juegos en donde los alumnos/as se convierten en diferentes objetos, animales, plantas.',
    'Tu eres una vela, estas prendida y comienzas a derretirte y te derrites por completo.',
    'Tú eres un árbol y un fuerte viento hace que sus ramas se muevan muy rápido.',
    'Cualquier otra actividad que el profesor/ra conozca y considere pertinente para afianzar esta destreza..'];
  sugerenciasArea9 = [
    'Ejercicios de opuestos: Blanco……..: Grande………..: Triste…………: Bueno………',
    'Nombrar cosas que solo empiecen con una letra: M: mamá, masa, maleta, mora, misa',
    'Completar frases: A la escuela voy en la ………. Mi nombre es:',
    'Cualquier otra actividad que el profesor/ra conozca y considere pertinente para afianzar esta destreza.'];
  sugerenciasArea10 = [
    'Respiración abdominal.',
    'Movimientos de la lengua.',
    'Soplar globos, velas, etc.',
    'Repetición de trabalenguas, canciones, poemas, etc.',
    'Repetición de letras, sílabas, palabras, números.',
    'Cualquier otra actividad que el profesor/ra conozca y considere pertinente para afianzar esta destreza.'];
  sugerenciasArea11 = [
    'Bailar en diferentes ritmos.',
    'Caminar en diferente ritmo.',
    'Memorizar rimas, trabalenguas, canciones etc.',
    'Repetir palabras, números.',
    'Cualquier otra actividad que el profesor/ra conozca y considere pertinente para afianzar esta destreza.'];
  sugerenciasArea12 = [
    'Ejercicios de ritmo con patrón visual y auditivo.',
    'Escuchar un sonido y repetirlo.',
    'Observar un movimiento y repetirlo.',
    'Marchar con ritmo (aplausos) producido con las palmas de las manos.',
    'Cualquier otra actividad que el profesor/ra conozca y considere pertinente para afianzar esta destreza.'];
  sugerenciasArea13 = [
    'Armar rompecabezas.',
    'Pedir que ponga en el mismo orden objetos presentados.',
    'Ordenar las láminas de acuerdo a la historia.',
    'Cualquier otra actividad que el profesor/ra conozca y considere pertinente para afianzar esta destreza.'];
  sugerenciasArea14 = [
    'Definir objetos por su uso.\n' +
    'Ejemplo: Es delgado, de madera, lo usamos en el aula, con el escribimos.',
    'Establecer diferencias y semejanzas.\n' +
    'Ejemplo: En que se parece y en que son diferentes un plátano y un pan.',
    'Dada una palabra decir cualidades.\n' +
    'Ejemplo: Casa: grande, fea, linda',
    'Cualquier otra actividad que el profesor/ra conozca y considere pertinente para afianzar esta destreza.'];
  sugerenciasArea15 = [
    'Ejercicios de relajación de las extremidades superiores: hombro, brazo.\n' +
    'Ejemplo: Levantar y subir los brazos, levantar y subir los hombros.',
    'Ejercicios de muñeca y mano.\n' +
    'Ejemplo: Rotar las manos sobre la muñeca. Abrir y cerrar las manos. Mover los dedos.',
    'Cualquier otra actividad que el profesor/ra conozca y considere pertinente para afianzar esta destreza.'];
  sugerenciasArea16 = [
    'Recortar.\n' +
    'Pintar con lápices o temperas.\n' +
    'Modelar plastilina, arcilla, masa, lodo.\n' +
    'Dibujar libremente.\n' +
    'Dibujar con tema.\n' +
    'Calcar.\n' +
    'Punzar.\n' +
    'Trozar papel.\n' +
    'Rasgar papel.\n' +
    'Hacer bolas de papel.',
    'Cualquier otra actividad que el profesor/ra conozca y considere pertinente para afianzar esta destreza.'];
  sugerenciasArea17 = [
    'Crucigramas.\n' +
    'Laberintos.\n' +
    'Sopas de letras.',
    'Tachar la figura de acuerdo al modelo.',
    'Cualquier otra actividad que el profesor/ra conozca y considere pertinente para afianzar esta destreza.'];
  resultadoAreas = [
    true, false,
    true, false,
    true, false,
    true, false,
    true, false,
    true, false,
    true, false,
    true, false,
    true];

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
