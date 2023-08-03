const express =require('express')
const { createBilling, updateBill, deleteBill } = require('../controller/billing')
const router = express.Router()

router.post('/createBill',createBilling)
router.put('/update/:id',updateBill)
router.delete('/delete/:id',deleteBill)

module.exports = router