
const express = require('express')
const router = express.Router();
const {createNewPatient,getAllPatients, getPatientById, updatePatient, deletePatient} = require('../controller/patientDetail')



router.get('/',getAllPatients)
router.post('/register',createNewPatient)
router.get('/:id',getPatientById)
router.put('/:id',updatePatient)
router.delete('/:id',deletePatient)


module.exports =router