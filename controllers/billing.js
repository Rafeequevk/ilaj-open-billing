const asynchHandler = require('../middlewares/asynchHandler')
const billingRepo = require('../repositories/billing')

//@desc  create a new bill
//Route POST /api/v1/billing/createBill
//Access public
const createBill = asynchHandler(async(req,res,next)=>{
const {invoiceId,item,price,quantity} = req.body
    await billingRepo.createTransaction(invoiceId,item,price,quantity)
    res.status(200).json({
        success: true,
        data: { message: "Success"},
      })
})

//@desc updatebill
//Route UPDATE /api/v1/billing/update/id
//Access public

const updateBill = asynchHandler(async(req,res,next)=>{
    const {item,price,quantity} = req.body
    const billingId = req.params.id
await billingRepo.updateBill(item,price,quantity,billingId)
res.status(200).json({
    success: true,
    data: { message: "Success"},
  })
})
//@desc  delete bill
//Route DELETE /api/v1/billing/delete/id
//Access public
const deleteBill = asynchHandler(async(req,res,next)=>{
    const billingId = req.params.id
    await billingRepo.deleteBill(billingId)
    res.status(200).json({
        success: true,
        data: { message: "Success"},
      })
})

module.exports={
  deleteBill,updateBill,createBill
}