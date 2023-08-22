const asynchHandler = require('../middlewares/asynchHandler')
const billingRepo = require('../repositories/billing')
const admissionRepo = require('../repositories/admission')
const patientDetailRepo = require('../repositories/patientDetails')

const viewBill =asynchHandler(async(req,res,next)=>{
    const patientId = req.params.patientId
    const admissionId = req.params.admissionId

    const patient = await patientDetailRepo.getPatientById(patientId)
 
    const bills = await billingRepo.getBillByAdmissionId(admissionId)

    res.status(200).json({
        success: true,
        data: { patientDetails: patient, Bills:bills}
      })
})