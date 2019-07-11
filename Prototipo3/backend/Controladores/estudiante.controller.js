const Estudiante = require('../Modelos/estudiante');

const estudianteCtrl = {};

estudianteCtrl.getEstudiantes = async (req, res) => {
    const estudiantes =  await Estudiante.find()
    res.json(estudiantes);
};

estudianteCtrl.createEstudiante = async (req, res) => {
    const estudiante = new Estudiante({
        discapacidad :req.body.discapacidad,
        observacion :req.body.observacion,
        tipoTest : req.body.tipoTest,
        nombreEstudiante: req.body.nombreEstudiante,
        anioEGB: req.body.anioEGB,
        fecha: req.body.fecha,
        paralelo: req.body.paralelo,
        nombreEvaluador: req.body.nombreEvaluador,
        anioLectivo: req.body.anioLectivo,
        area1Total	:req.body.	area1Total	,
        area1a	:req.body.area1a	,
        area1b	:req.body.	area1b	,
        area1c	:req.body.	area1c	,
        area2Total	:req.body.	area2Total	,
        area2a	:req.body.	area2a	,
        area2b	:req.body.	area2b	,
        area2c	:req.body.	area2c	,
        area2d	:req.body.	area2d	,
        area3Total :req.body.	area3Total	,
        aera3TemporalTotal	:req.body.	aera3TemporalTotal	,
        area3Ta	:req.body.	area3Ta	,
        area3Tb	:req.body.	area3Tb	,
        area3Tc	:req.body.	area3Tc	,
        area3Td	:req.body.	area3Td	,
        aera3EspacialTotal	:req.body.	aera3EspacialTotal	,
        area3Ea	:req.body.	area3Ea	,
        area3Eb	:req.body.	area3Eb	,
        area3Ec	:req.body.	area3Ec	,
        area3Ed	:req.body.	area3Ed	,
        area4Total	:req.body.	area4Total	,
        area4a	:req.body.	area4a	,
        area4b	:req.body.	area4b	,
        area5Total	:req.body.	area5Total	,
        area5a	:req.body.	area5a	,
        area5b	:req.body.	area5b	,
        area5c	:req.body.	area5c	,
        area5d	:req.body.	area5d	,
        area5e	:req.body.	area5e	,
        area5f	:req.body.	area5f	,
        area5g	:req.body.	area5g	,
        area5h	:req.body.	area5h	,
        area5i	:req.body.	area5i	,
        area5j	:req.body.	area5j	,
        area5k	:req.body.	area5k	,
        area5l	:req.body.	area5l	,
        area5m	:req.body.	area5m	,
        area5n	:req.body.	area5n	,
        area5o	:req.body.	area5o	,
        area6Total	:req.body.	area6Total	,
        area6a	:req.body.	area6a	,
        area6b	:req.body.	area6b	,
        area6c	:req.body.	area6c	,
        area6d	:req.body.	area6d	,
        area7total	:req.body.	area7total	,
        area7a	:req.body.	area7a	,
        area7b	:req.body.	area7b	,
        area7c	:req.body.	area7c	,
        area7d	:req.body.	area7d	,
        area7e	:req.body.	area7e	,
        area7f	:req.body.	area7f	,
        area7g	:req.body.	area7g	,
        area7h	:req.body.	area7h	,
        area7i	:req.body.	area7i	,
        area7j	:req.body.	area7j	,
        area8total	:req.body.	area8total	,
        area8a	:req.body.	area8a	,
        area8b	:req.body.	area8b	,
        area8c	:req.body.	area8c	,
        area8d	:req.body.	area8d	,
        area8e	:req.body.	area8e	,
        area8f	:req.body.	area8f	,
        area8g	:req.body.	area8g	,
        area8h	:req.body.	area8h	,
        area8i	:req.body.	area8i	,
        area8j	:req.body.	area8j	,
        area9Total	:req.body.	area9Total	,
        area9a	:req.body.	area9a	,
        area9b	:req.body.	area9b	,
        area9c	:req.body.	area9c	,
        area9d	:req.body.	area9d	,
        area9e	:req.body.	area9e	,
        area10total	:req.body.	area10total	,
        area10a	:req.body.	area10a	,
        area10b	:req.body.	area10b	,
        area10c	:req.body.	area10c	,
        area10d	:req.body.	area10d	,
        area10e	:req.body.	area10e	,
        area10f	:req.body.	area10f	,
        area11total	:req.body.	area11total	,
        area11a	:req.body.	area11a	,
        area11b	:req.body.	area11b	,
        area11c	:req.body.	area11c	,
        area11d	:req.body.	area11d	,
        area11e	:req.body.	area11e	,
        area11f	:req.body.	area11f	,
        area11g	:req.body.	area11g	,
        area11h	:req.body.	area11h	,
        area11i	:req.body.	area11i	,
        area11j	:req.body.	area11j	,
        area12total	:req.body.	area12total	,
        area12a	:req.body.	area12a	,
        area12b	:req.body.	area12b	,
        area12c	:req.body.	area12c	,
        area12d	:req.body.	area12d	,
        area12e	:req.body.	area12e	,
        area12f	:req.body.	area12f	,
        area12g	:req.body.	area12g	,
        area13Total	:req.body.	area13Total	,
        area13a	:req.body.	area13a	,
        area13b	:req.body.	area13b	,
        area13c	:req.body.	area13c	,
        area14total	:req.body.	area14total	,
        area14a	:req.body.	area14a	,
        area14b	:req.body.	area14b	,
        area14c	:req.body.	area14c	,
        area14d	:req.body.	area14d	,
        area14e	:req.body.	area14e	,
        area14f	:req.body.	area14f	,
        area14g	:req.body.	area14g	,
        area14h	:req.body.	area14h	,
        area14i	:req.body.	area14i	,
        area14j	:req.body.	area14j	,
        area15Total	:req.body.	area15Total	,
        area15a	:req.body.	area15a	,
        area15b	:req.body.	area15b	,
        area15c	:req.body.	area15c	,
        area16Total	:req.body.	area16Total	,
        area16a	:req.body.	area16a	,
        area16b	:req.body.	area16b	,
        area17Total	:req.body.	area17Total	,
        area17a	:req.body.	area17a	,
        area17b	:req.body.	area17b,
        totalAreasDebilitadas :req.body.	totalAreasDebilitadas


    });
    await estudiante.save();
    res.json({
        'status': 'Estudiante Saved'
    });
};

estudianteCtrl.getEstudiante= async(req, res) => {
    const estudiante = await Estudiante.findById(req.params.id);
    res.json(estudiante);
};

estudianteCtrl.editEstudiante = async (req, res) => {
    const{ id } = req.params;
    const estudiante= {
        discapacidad :req.body.discapacidad,
        observacion :req.body.observacion,
        tipoTest : req.body.tipoTest,
        nombreEstudiante: req.body.nombreEstudiante,
        anioEGB: req.body.anioEGB,
        fecha: req.body.fecha,
        paralelo: req.body.paralelo,
        nombreEvaluador: req.body.nombreEvaluador,
        anioLectivo: req.body.anioLectivo,
        area1Total	:req.body.	area1Total	,
        area1a	:req.body.area1a	,
        area1b	:req.body.	area1b	,
        area1c	:req.body.	area1c	,
        area2Total	:req.body.	area2Total	,
        area2a	:req.body.	area2a	,
        area2b	:req.body.	area2b	,
        area2c	:req.body.	area2c	,
        area2d	:req.body.	area2d	,
        area3Total :req.body.	area3Total	,
        aera3TemporalTotal	:req.body.	aera3TemporalTotal	,
        area3Ta	:req.body.	area3Ta	,
        area3Tb	:req.body.	area3Tb	,
        area3Tc	:req.body.	area3Tc	,
        area3Td	:req.body.	area3Td	,
        aera3EspacialTotal	:req.body.	aera3EspacialTotal	,
        area3Ea	:req.body.	area3Ea	,
        area3Eb	:req.body.	area3Eb	,
        area3Ec	:req.body.	area3Ec	,
        area3Ed	:req.body.	area3Ed	,
        area4Total	:req.body.	area4Total	,
        area4a	:req.body.	area4a	,
        area4b	:req.body.	area4b	,
        area5Total	:req.body.	area5Total	,
        area5a	:req.body.	area5a	,
        area5b	:req.body.	area5b	,
        area5c	:req.body.	area5c	,
        area5d	:req.body.	area5d	,
        area5e	:req.body.	area5e	,
        area5f	:req.body.	area5f	,
        area5g	:req.body.	area5g	,
        area5h	:req.body.	area5h	,
        area5i	:req.body.	area5i	,
        area5j	:req.body.	area5j	,
        area5k	:req.body.	area5k	,
        area5l	:req.body.	area5l	,
        area5m	:req.body.	area5m	,
        area5n	:req.body.	area5n	,
        area5o	:req.body.	area5o	,
        area6Total	:req.body.	area6Total	,
        area6a	:req.body.	area6a	,
        area6b	:req.body.	area6b	,
        area6c	:req.body.	area6c	,
        area6d	:req.body.	area6d	,
        area7total	:req.body.	area7total	,
        area7a	:req.body.	area7a	,
        area7b	:req.body.	area7b	,
        area7c	:req.body.	area7c	,
        area7d	:req.body.	area7d	,
        area7e	:req.body.	area7e	,
        area7f	:req.body.	area7f	,
        area7g	:req.body.	area7g	,
        area7h	:req.body.	area7h	,
        area7i	:req.body.	area7i	,
        area7j	:req.body.	area7j	,
        area8total	:req.body.	area8total	,
        area8a	:req.body.	area8a	,
        area8b	:req.body.	area8b	,
        area8c	:req.body.	area8c	,
        area8d	:req.body.	area8d	,
        area8e	:req.body.	area8e	,
        area8f	:req.body.	area8f	,
        area8g	:req.body.	area8g	,
        area8h	:req.body.	area8h	,
        area8i	:req.body.	area8i	,
        area8j	:req.body.	area8j	,
        area9Total	:req.body.	area9Total	,
        area9a	:req.body.	area9a	,
        area9b	:req.body.	area9b	,
        area9c	:req.body.	area9c	,
        area9d	:req.body.	area9d	,
        area9e	:req.body.	area9e	,
        area10total	:req.body.	area10total	,
        area10a	:req.body.	area10a	,
        area10b	:req.body.	area10b	,
        area10c	:req.body.	area10c	,
        area10d	:req.body.	area10d	,
        area10e	:req.body.	area10e	,
        area10f	:req.body.	area10f	,
        area11total	:req.body.	area11total	,
        area11a	:req.body.	area11a	,
        area11b	:req.body.	area11b	,
        area11c	:req.body.	area11c	,
        area11d	:req.body.	area11d	,
        area11e	:req.body.	area11e	,
        area11f	:req.body.	area11f	,
        area11g	:req.body.	area11g	,
        area11h	:req.body.	area11h	,
        area11i	:req.body.	area11i	,
        area11j	:req.body.	area11j	,
        area12total	:req.body.	area12total	,
        area12a	:req.body.	area12a	,
        area12b	:req.body.	area12b	,
        area12c	:req.body.	area12c	,
        area12d	:req.body.	area12d	,
        area12e	:req.body.	area12e	,
        area12f	:req.body.	area12f	,
        area12g	:req.body.	area12g	,
        area13Total	:req.body.	area13Total	,
        area13a	:req.body.	area13a	,
        area13b	:req.body.	area13b	,
        area13c	:req.body.	area13c	,
        area14total	:req.body.	area14total	,
        area14a	:req.body.	area14a	,
        area14b	:req.body.	area14b	,
        area14c	:req.body.	area14c	,
        area14d	:req.body.	area14d	,
        area14e	:req.body.	area14e	,
        area14f	:req.body.	area14f	,
        area14g	:req.body.	area14g	,
        area14h	:req.body.	area14h	,
        area14i	:req.body.	area14i	,
        area14j	:req.body.	area14j	,
        area15Total	:req.body.	area15Total	,
        area15a	:req.body.	area15a	,
        area15b	:req.body.	area15b	,
        area15c	:req.body.	area15c	,
        area16Total	:req.body.	area16Total	,
        area16a	:req.body.	area16a	,
        area16b	:req.body.	area16b	,
        area17Total	:req.body.	area17Total	,
        area17a	:req.body.	area17a	,
        area17b	:req.body.	area17b,
        totalAreasDebilitadas :req.body.	totalAreasDebilitadas
    };
    await Estudiante.findByIdAndUpdate(id, {$set: estudiante}, {new: true});
    res.json({status: 'Estudiante Updated'});
};

estudianteCtrl.deleteEstudiante= async (req, res) => {
    const{ id } = req.params;
    await Estudiante.findByIdAndRemove(id);
    res.json({status: 'Estudiante Removed'});
};

// estudianteCtrl.estadisticasEstudiantes = async (req, res) => {
//     const{ tipoTest } = req.params;
//     const{ anioLectivo } = req.params;
//     const{ paralelo } = req.params;
//     const estudiantesE =  await Estudiante.find({tipoTest:req.params.tipoTest,
//         anioLectivo: req.params.anioLectivo,paralelo:req.params.paralelo});
//     res.json(estudiantesE);
// };

estudianteCtrl.estadisticasEstudiantes = async (req, res) => {
    const{ tipoTest } = req.params;
    const{ paralelo } = req.params;
    const{ anioLectivo } = req.params;
    const estudiantesE =  await Estudiante.find({tipoTest
        ,paralelo,anioLectivo});
    res.json(estudiantesE);
};

estudianteCtrl.estadisticasTipoTest = async (req, res) => {
    const{ tipoTest } = req.params;
    const{ anioLectivo } = req.params;
    const estudiantesE =  await Estudiante.find({tipoTest
        ,anioLectivo});
    res.json(estudiantesE);
};


module.exports = estudianteCtrl;
