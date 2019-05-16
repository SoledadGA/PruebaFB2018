const express = require('express');
const router = express.Router();
const estudianteC = require('../Controladores/estudiante.controller');

router.get('/', estudianteC.getEstudiantes);
router.post('/', estudianteC.createEstudiante);
router.get('/:id', estudianteC.getEstudiante);
router.put('/:id',estudianteC.editEstudiante);
router.delete('/:id', estudianteC.deleteEstudiante);

module.exports = router;

