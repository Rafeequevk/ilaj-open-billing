const express =require('express')
const billingController  = require('../controllers/billing')
const router = express.Router()

router.post('/createBill',billingController.createBill)
router.put('/update/:id',billingController.updateBill)
router.delete('/delete/:id',billingController.deleteBill)

module.exports = router