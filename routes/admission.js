
const express = require('express');
const { getAllAdmission, createAdmission, getAdmissionById, updateAdmission, deleteAdmiddion } = require('../controller/admission');
const router = express.Router();

router.get('/',getAllAdmission)
router.post('/admit',createAdmission)
router.get('/:id',getAdmissionById)
router.put('/:id',updateAdmission)
router.delete('/:id',deleteAdmiddion)

module.exports =router