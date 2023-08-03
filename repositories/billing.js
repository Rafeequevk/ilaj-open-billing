const pool = require("../config/db");
const BillingQueries = require('../quries/billing')

const createInvoice = (patientIid,admissionId,finalAmount,discountAmount)=>{
console.log("patientId",patientIid, "admissionId:",admissionId);
return new Promise((resolve,reject)=>{
    pool.query(BillingQueries.createInvoice,[patientIid,admissionId,finalAmount,discountAmount],(error,result)=>{
        if(error) reject(error)
        else resolve(result.rows[0].invoice_id)
    })
})
}
const createTransaction =(invoiceId,item,price,quantity)=>{
    return new Promise((resolve,reject)=>{
        pool.query(BillingQueries.createTransaction,[invoiceId,item,price,quantity],(error,result)=>{
            if(error) reject(error)
            else resolve(result.rows)
        })
    })
}

const updateBill = (item,price,quantity,billingId)=>{
    return new Promise((resolve,reject)=>{
        pool.query(BillingQueries.updateBill,[item,price,quantity,billingId],(error,result)=>{
            if(error) reject(error)
            else resolve(result.rows)

        })
    })

}
const deleteBill = (billingId)=>{
    return new Promise((resolve,reject)=>{
        pool.query(BillingQueries.deleteBill,[billingId],(error,result)=>{
            if(error) reject(error)
            else resolve(result.rows)
        })
    })
}

const getBillByAdmissionId = (admissionId)=>{
    return new Promise((resolve,reject)=>{
        pool.query(BillingQueries.getBillByAdmissionId,[admissionId],(error,result)=>{
            if(error) reject(error)
            else resolve (result.rows)
        })
    })
}

module.exports ={
    createInvoice,createTransaction,updateBill,deleteBill,getBillByAdmissionId
}