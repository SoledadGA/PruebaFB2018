export class Estudiante {
  constructor(_id = '',
              tipoTest = 0,
              discapacidad = 0,
              observacion = '',
              nombreEstudiante = '',
              anioEGB = '',
              fecha = '',
              paralelo = '',
              nombreEvaluador = '',
              anioLectivo = '',
              area1Total	= 0,
              area1a	= '',
              area1b	= '',
              area1c	= '',
              area2Total	= 0,
              area2a	= '',
              area2b	= '',
              area2c	= '',
              area2d	= '',
              area3Total = 0 ,
              aera3TemporalTotal	= '',
              area3Ta	= '',
              area3Tb	= '',
              area3Tc	= '',
              area3Td	= '',
              aera3EspacialTotal	= '',
              area3Ea	= '',
              area3Eb	= '',
              area3Ec	= '',
              area3Ed	= '',
              area4Total	= 0,
              area4a	= '',
              area4b	= '',
              area5Total	= 0,
              area5a	= '',
              area5b	= '',
              area5c	= '',
              area5d	= '',
              area5e	= '',
              area5f	= '',
              area5g	= '',
              area5h	= '',
              area5i	= '',
              area5j	= '',
              area5k	= '',
              area5l	= '',
              area5m	= '',
              area5n	= '',
              area5o	= '',
              area6Total	= 0,
              area6a	= '',
              area6b	= '',
              area6c	= '',
              area6d	= '',
              area7total	= 0,
              area7a	= '',
              area7b	= '',
              area7c	= '',
              area7d	= '',
              area7e	= '',
              area7f	= '',
              area7g	= '',
              area7h	= '',
              area7i	= '',
              area7j	= '',
              area8total	= 0,
              area8a	= '',
              area8b	= '',
              area8c	= '',
              area8d	= '',
              area8e	= '',
              area8f	= '',
              area8g	= '',
              area8h	= '',
              area8i	= '',
              area8j	= '',
              area9Total	= 0,
              area9a	= '',
              area9b	= '',
              area9c	= '',
              area9d	= '',
              area9e	= '',
              area10total	= 0,
              area10a	= '',
              area10b	= '',
              area10c	= '',
              area10d	= '',
              area10e	= '',
              area10f	= '',
              area11total	= 0,
              area11a	= '',
              area11b	= '',
              area11c	= '',
              area11d	= '',
              area11e	= '',
              area11f	= '',
              area11g	= '',
              area11h	= '',
              area11i	= '',
              area11j	= '',
              area12total	= 0,
              area12a	= '',
              area12b	= '',
              area12c	= '',
              area12d	= '',
              area12e	= '',
              area12f	= '',
              area12g	= '',
              area13Total	= 0,
              area13a	= '',
              area13b	= '',
              area13c	= '',
              area14total	= 0,
              area14a	= '',
              area14b	= '',
              area14c	= '',
              area14d	= '',
              area14e	= '',
              area14f	= '',
              area14g	= '',
              area14h	= '',
              area14i	= '',
              area14j	= '',
              area15Total	= 0,
              area15a	= '',
              area15b	= '',
              area15c	= '',
              area16Total	= 0,
              area16a	= '',
              area16b	= '',
              area17Total	= 0,
              area17a	= '',
              area17b	= '',
              totalAreasDebilitadas = 0
  ) {

    this._id = _id;
    this.discapacidad = discapacidad;
    this.observacion = observacion;
    this.tipoTest = tipoTest;
    this.nombreEstudiante = nombreEstudiante;
    this.anioEGB = anioEGB;
    this.fecha = fecha;
    this.paralelo = paralelo;
    this.nombreEvaluador = nombreEvaluador;
    this.anioLectivo = anioLectivo;
    this.	area1Total	=	area1Total	;
    this.	area1a	=	area1a	;
    this.	area1b	=	area1b	;
    this.	area1c	=	area1c	;
    this.	area2Total	=	area2Total	;
    this.	area2a	=	area2a	;
    this.	area2b	=	area2b	;
    this.	area2c	=	area2c	;
    this.	area2d	=	area2d	;
    this.area3Total = area3Total;
    this.	aera3TemporalTotal	=	aera3TemporalTotal	;
    this.	area3Ta	=	area3Ta	;
    this.	area3Tb	=	area3Tb	;
    this.	area3Tc	=	area3Tc	;
    this.	area3Td	=	area3Td	;
    this.	aera3EspacialTotal	=	aera3EspacialTotal	;
    this.	area3Ea	=	area3Ea	;
    this.	area3Eb	=	area3Eb	;
    this.	area3Ec	=	area3Ec	;
    this.	area3Ed	=	area3Ed	;
    this.	area4Total	=	area4Total	;
    this.	area4a	=	area4a	;
    this.	area4b	=	area4b	;
    this.	area5Total	=	area5Total	;
    this.	area5a	=	area5a	;
    this.	area5b	=	area5b	;
    this.	area5c	=	area5c	;
    this.	area5d	=	area5d	;
    this.	area5e	=	area5e	;
    this.	area5f	=	area5f	;
    this.	area5g	=	area5g	;
    this.	area5h	=	area5h	;
    this.	area5i	=	area5i	;
    this.	area5j	=	area5j	;
    this.	area5k	=	area5k	;
    this.	area5l	=	area5l	;
    this.	area5m	=	area5m	;
    this.	area5n	=	area5n	;
    this.	area5o	=	area5o	;
    this.	area6Total	=	area6Total	;
    this.	area6a	=	area6a	;
    this.	area6b	=	area6b	;
    this.	area6c	=	area6c	;
    this.	area6d	=	area6d	;
    this.	area7total	=	area7total	;
    this.	area7a	=	area7a	;
    this.	area7b	=	area7b	;
    this.	area7c	=	area7c	;
    this.	area7d	=	area7d	;
    this.	area7e	=	area7e	;
    this.	area7f	=	area7f	;
    this.	area7g	=	area7g	;
    this.	area7h	=	area7h	;
    this.	area7i	=	area7i	;
    this.	area7j	=	area7j	;
    this.	area8total	=	area8total	;
    this.	area8a	=	area8a	;
    this.	area8b	=	area8b	;
    this.	area8c	=	area8c	;
    this.	area8d	=	area8d	;
    this.	area8e	=	area8e	;
    this.	area8f	=	area8f	;
    this.	area8g	=	area8g	;
    this.	area8h	=	area8h	;
    this.	area8i	=	area8i	;
    this.	area8j	=	area8j	;
    this.	area9Total	=	area9Total	;
    this.	area9a	=	area9a	;
    this.	area9b	=	area9b	;
    this.	area9c	=	area9c	;
    this.	area9d	=	area9d	;
    this.	area9e	=	area9e	;
    this.	area10total	=	area10total	;
    this.	area10a	=	area10a	;
    this.	area10b	=	area10b	;
    this.	area10c	=	area10c	;
    this.	area10d	=	area10d	;
    this.	area10e	=	area10e	;
    this.	area10f	=	area10f	;
    this.	area11total	=	area11total	;
    this.	area11a	=	area11a	;
    this.	area11b	=	area11b	;
    this.	area11c	=	area11c	;
    this.	area11d	=	area11d	;
    this.	area11e	=	area11e	;
    this.	area11f	=	area11f	;
    this.	area11g	=	area11g	;
    this.	area11h	=	area11h	;
    this.	area11i	=	area11i	;
    this.	area11j	=	area11j	;
    this.	area12total	=	area12total	;
    this.	area12a	=	area12a	;
    this.	area12b	=	area12b	;
    this.	area12c	=	area12c	;
    this.	area12d	=	area12d	;
    this.	area12e	=	area12e	;
    this.	area12f	=	area12f	;
    this.	area12g	=	area12g	;
    this.	area13Total	=	area13Total	;
    this.	area13a	=	area13a	;
    this.	area13b	=	area13b	;
    this.	area13c	=	area13c	;
    this.	area14total	=	area14total	;
    this.	area14a	=	area14a	;
    this.	area14b	=	area14b	;
    this.	area14c	=	area14c	;
    this.	area14d	=	area14d	;
    this.	area14e	=	area14e	;
    this.	area14f	=	area14f	;
    this.	area14g	=	area14g	;
    this.	area14h	=	area14h	;
    this.	area14i	=	area14i	;
    this.	area14j	=	area14j	;
    this.	area15Total	=	area15Total	;
    this.	area15a	=	area15a	;
    this.	area15b	=	area15b	;
    this.	area15c	=	area15c	;
    this.	area16Total	=	area16Total	;
    this.	area16a	=	area16a	;
    this.	area16b	=	area16b	;
    this.	area17Total	=	area17Total	;
    this.	area17a	=	area17a	;
    this.	area17b	=	area17b	;
    this.totalAreasDebilitadas = totalAreasDebilitadas;

  }

  _id: string;
  discapacidad: number;
  observacion : string;
  tipoTest: number;
  nombreEstudiante: string;
  anioEGB: string;
  fecha: string;
  paralelo: string;
  nombreEvaluador: string;
  anioLectivo: string;
  area1Total	: number;
  area1a	: string;
  area1b	: string;
  area1c	: string;
  area2Total	: number;
  area2a	: string;
  area2b	: string;
  area2c	: string;
  area2d	: string;
  area3Total : number;
  aera3TemporalTotal	: string;
  area3Ta	: string;
  area3Tb	: string;
  area3Tc	: string;
  area3Td	: string;
  aera3EspacialTotal	: string;
  area3Ea	: string;
  area3Eb	: string;
  area3Ec	: string;
  area3Ed	: string;
  area4Total	: number;
  area4a	: string;
  area4b	: string;
  area5Total	: number;
  area5a	: string;
  area5b	: string;
  area5c	: string;
  area5d	: string;
  area5e	: string;
  area5f	: string;
  area5g	: string;
  area5h	: string;
  area5i	: string;
  area5j	: string;
  area5k	: string;
  area5l	: string;
  area5m	: string;
  area5n	: string;
  area5o	: string;
  area6Total	: number;
  area6a	: string;
  area6b	: string;
  area6c	: string;
  area6d	: string;
  area7total	: number;
  area7a	: string;
  area7b	: string;
  area7c	: string;
  area7d	: string;
  area7e	: string;
  area7f	: string;
  area7g	: string;
  area7h	: string;
  area7i	: string;
  area7j	: string;
  area8total	: number;
  area8a	: string;
  area8b	: string;
  area8c	: string;
  area8d	: string;
  area8e	: string;
  area8f	: string;
  area8g	: string;
  area8h	: string;
  area8i	: string;
  area8j	: string;
  area9Total	: number;
  area9a	: string;
  area9b	: string;
  area9c	: string;
  area9d	: string;
  area9e	: string;
  area10total	: number;
  area10a	: string;
  area10b	: string;
  area10c	: string;
  area10d	: string;
  area10e	: string;
  area10f	: string;
  area11total	: number;
  area11a	: string;
  area11b	: string;
  area11c	: string;
  area11d	: string;
  area11e	: string;
  area11f	: string;
  area11g	: string;
  area11h	: string;
  area11i	: string;
  area11j	: string;
  area12total	: number;
  area12a	: string;
  area12b	: string;
  area12c	: string;
  area12d	: string;
  area12e	: string;
  area12f	: string;
  area12g	: string;
  area13Total	: number;
  area13a	: string;
  area13b	: string;
  area13c	: string;
  area14total	: number;
  area14a	: string;
  area14b	: string;
  area14c	: string;
  area14d	: string;
  area14e	: string;
  area14f	: string;
  area14g	: string;
  area14h	: string;
  area14i	: string;
  area14j	: string;
  area15Total	: number;
  area15a	: string;
  area15b	: string;
  area15c	: string;
  area16Total	: number;
  area16a	: string;
  area16b	: string;
  area17Total	: number;
  area17a	: string;
  area17b	: string;
  totalAreasDebilitadas : number;


}
