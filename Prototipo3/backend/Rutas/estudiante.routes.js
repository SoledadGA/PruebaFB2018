const express = require('express');
const router = express.Router();
const estudianteC = require('../Controladores/estudiante.controller');

router.get('/', estudianteC.getEstudiantes);
router.post('/', estudianteC.createEstudiante);
router.get('/:id', estudianteC.getEstudiante);
router.put('/:id',estudianteC.editEstudiante);
router.delete('/:id', estudianteC.deleteEstudiante);
router.get('/:tipoTest/:paralelo/:anioLectivo', estudianteC.estadisticasEstudiantes);
router.get('/:tipoTest/:anioLectivo', estudianteC.estadisticasTipoTest);
module.exports = router;

