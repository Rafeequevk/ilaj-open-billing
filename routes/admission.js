
const express = require('express');
const  admissionContoller = require('../controllers/admission');
const router = express.Router();

router.get('/',admissionContoller.getAllAdmission)
router.post('/admit',admissionContoller.createAdmission)
router.get('/:id',admissionContoller.getAdmissionById)
router.put('/:id',admissionContoller.updateAdmission)
router.delete('/:id',admissionContoller.deleteAdmission)

module.exports =router

