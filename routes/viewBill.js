const express =require('express')
const { viewBill } = require('../controllers/viewBill')
const viewBillController = require('../controllers/invoiceGenerator')

const router = express.Router()

// router.get('/:patientId/:admissionId',viewBill)
router.get('/bill/:id',viewBillController.generateInvoice)

module.exports = router