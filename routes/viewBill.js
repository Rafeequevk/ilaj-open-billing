const express =require('express')
const { viewBill } = require('../controller/viewBill')
const {generatePdf} = require('../controller/invoiceGenerator')

const router = express.Router()

// router.get('/:patientId/:admissionId',viewBill)
router.get('/bill/:id',generatePdf)

module.exports = router