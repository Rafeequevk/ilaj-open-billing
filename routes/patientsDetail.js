
const express = require('express')
const router = express.Router();
const patientController =  require('../controllers/patientDetail')



router.get('/',patientController.getAllPatients)
router.post('/register',patientController.createNewPatient)
router.get('/:id',patientController.getPatientById)
router.put('/:id',patientController.updatePatient)
router.delete('/:id',patientController.deletePatient)


module.exports =router