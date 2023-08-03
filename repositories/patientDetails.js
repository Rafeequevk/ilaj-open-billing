
const pool = require("../config/db");
const patientsDetailQueries = require('../quries/patientsDetail')

const createNewPatient = (name,age,gender,mrdNo,address,phone)=>{
return new Promise((resolve,reject)=>{
    pool.query(patientsDetailQueries.createNewpatient,[name,age,gender,mrdNo,address,phone],(error,result)=>{
        if(error) reject(error)
        else resolve(result.rows[0].patient_id)
    })
})
}
const getAllPatients = ()=>{
    return new Promise ((resolve,reject)=>{
        pool.query(patientsDetailQueries.getAllPatients,(error,result)=>{
            if(error) reject(error)
            else resolve(result.rows)
        })
    })
}

const getPatientById =(p_id)=>{
return new Promise ((resolve,reject)=>{
    pool.query(patientsDetailQueries.getPatientById,[p_id],(error,result)=>{
        if (error) reject(error)
        else resolve(result.rows)
    })
})
}

const updatePatient = (name,age,gender,mrdNo,address,phone,chiefPhysician,consultingDr,p_id)=>{
    return new Promise((resolve,reject)=>{
        pool.query(patientsDetailQueries.updatePatient,[name,age,gender,mrdNo,address,phone,chiefPhysician,consultingDr,p_id],(error,result)=>{
            if(error) reject(error)
            else resolve(true)
        })
    })
}

const deletePatient = (id)=>{
    return new Promise((resolve,reject)=>{
        pool.query(patientsDetailQueries.deletePatient,[id],(error,result)=>{
            if(error) reject(error)
            else resolve(true)
        })
    })
}

module.exports={ createNewPatient,getAllPatients,getPatientById,updatePatient,deletePatient}