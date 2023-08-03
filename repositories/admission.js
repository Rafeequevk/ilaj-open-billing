
const pool = require("../config/db");
const admissionQueries = require('../quries/admission')

const createAdmission = (patientId,admissionDate,roomNo,chiefPhysician,consultingDr)=>{
return new Promise((resolve,reject)=>{
    pool.query(admissionQueries.createAdmission,[patientId,admissionDate,roomNo,chiefPhysician,consultingDr],(error,result)=>{
        if(error) reject(error)
        else resolve(result.rows[0].admission_id)
    })
})
}
const getAllAdmission = ()=>{
    return new Promise ((resolve,reject)=>{
        pool.query(admissionQueries.getAllAdmission,(error,result)=>{
            if(error) reject(error)
            else resolve(result.rows)
        })
    })
}

const getAdmissionById =(id)=>{
return new Promise ((resolve,reject)=>{
    pool.query(admissionQueries.getAdmissionById,[id],(error,result)=>{
        if (error) reject(error)
        else resolve(result.rows)
    })
})
}

const updateAdmission = (mrdNo,admissionDate,dischargeDate,roomNo,chiefPhysician,consultingDr,id)=>{
    return new Promise((resolve,reject)=>{
        pool.query(admissionQueries.updateAdmission,[mrdNo,admissionDate,dischargeDate,roomNo,chiefPhysician,consultingDr,id],(error,result)=>{
            if(error) reject(error)
            else resolve(true)
        })
    })
}

const deleteAdmission = (id)=>{
    return new Promise((resolve,reject)=>{
        pool.query(admissionQueries.deleteAdmission,[id],(error,result)=>{
            if(error) reject(error)
            else resolve(true)
        })
    })
}

module.exports={ createAdmission,getAdmissionById,getAllAdmission,updateAdmission,deleteAdmission}