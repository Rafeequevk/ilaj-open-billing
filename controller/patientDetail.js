const patientDetailRepo = require('../repositories/patientDetails')
const errorRespons = require("../utils/errorResponse");
const asynchHandler = require('../middlewares/asynchHandler')
const admissionRepo = require('../repositories/admission')
const billingRepo = require('../repositories/billing')

//@desc  create a new patient
//Route POST /api/v1/register
//Access public
exports.createNewPatient = asynchHandler(async(req,res,next)=>{
const {name,age,gender,mrdNo,address,phone,chiefPhysician,consultingDr}= req.body.patientDetails
const {admissionDate,roomNo}= req.body.admissionDetails
const {finalAmount,discountAmount} = req.body.invoiceDetails
const patientId = await patientDetailRepo.createNewPatient(name,age,gender,mrdNo,address,phone)
console.log("patient Id :", patientId);
const admissionId = await admissionRepo.createAdmission(patientId,admissionDate,roomNo,chiefPhysician,consultingDr)
await billingRepo.createInvoice(patientId,admissionId,finalAmount,discountAmount)
  res.status(200).json({
  success: true,
  data: { message: "Succesfully Admitted"},
})
});


//@desc  get all patient
//Route GET /api/v1/patients
//Access public

exports.getAllPatients = asynchHandler(async (req,res)=>{
    const patients = await patientDetailRepo.getAllPatients()
    res.status(201).json({
        success: true,
        data: { message: "Complete Patient List",patients},
      });
})

//@desc  get patient by Patient_id
//Route GET /api/v1/patients/id
//Access public

exports.getPatientById = asynchHandler(async(req,res,next)=>{
    const id= req.params.id;
    const patient = await patientDetailRepo.getPatientById(id)
    if(patient && patient.length){
      return res.status(201).json({
        success: true,
        data: { message: "Patient with Selected id",patient},
      });
    }
    next(new errorRespons(`Message: Patient Doesn't Exist with id ${id}`, 404));
})

//@desc  Update patient Details
//Route PUT /api/v1/patients/id
//Access public

exports.updatePatient = asynchHandler(async(req,res)=>{
const {name,age,gender,mrdNo,address,phone,chiefPhysician,consultingDr}= req.body
const id = req.params.id
const patientExist = await patientDetailRepo.updatePatient(name,age,gender,mrdNo,address,phone,chiefPhysician,consultingDr,id)
if(patientExist){
  res.status(201).json({
    success: true,
    data: { message: "Updated Succesfully"},
  })}else{
    next(new errorRespons(`Message: Patient Doesn't Exist with id ${id}`, 404));
  }
})
//@desc  Delete patient Details
//Route DELETE /api/v1/patients/id
//Access public

exports.deletePatient = asynchHandler (async (req,res)=>{
  const id = req.params.id
  const deleted = await patientDetailRepo.deletePatient(id)
  if(deleted){
    res.status(201).json({
      success: true,
      data: { message: "Deleted Succesfully"},
    });
  }else{
    next(new errorRespons(`Message: Patient Doesn't Exist with id ${id}`, 404));
  }
})

