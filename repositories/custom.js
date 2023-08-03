const pool = require("../config/db");   
const customQueries = require('../quries/custom')
const  createInvoice = (patientId)=>{
return new Promise((resolve,reject)=>{
     pool.query(customQueries.invoiceHead,[patientId],(error,result)=>{
        if(error) reject(error)
        else resolve(result.rows)
     })
})
}


const getBillItems = (admissionId)=>{
    return new Promise((resolve,reject)=>{
        pool.query(customQueries.billItems,[admissionId],(error,result)=>{
            if(error) reject(error)
            else resolve(result.rows)
        })
    })
}

module.exports={
    createInvoice,getBillItems
}