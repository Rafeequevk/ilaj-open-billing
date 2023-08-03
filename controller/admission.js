const admissionRepo = require('../repositories/admission')
const errorRespons = require("../utils/errorResponse");
const asynchHandler = require('../middlewares/asynchHandler')

//@desc  create a new admission
//Route POST /api/v1/admission/admit
//Access public
exports.createAdmission = asynchHandler(async(req,res,next)=>{
const {mrdNo,admissionDate,roomNo,chiefPhysician,consultingDr}= req.body
const created = await admissionRepo.createAdmission(mrdNo,admissionDate,roomNo,chiefPhysician,consultingDr)
if(created){
  res.status(200).json({
  success: true,
  data: { message: "Succesfully Admitted"},
})}
});


//@desc  get all admissions
//Route GET /api/v1/admission
//Access public

exports.getAllAdmission = asynchHandler(async (req,res)=>{
    const admissions = await admissionRepo.getAllAdmission()
    res.status(201).json({
        success: true,
        data: { message: "Complete admision list",admissions},
      });
})

//@desc  get admision by admission_id
//Route GET /api/v1/admission/id
//Access public

exports.getAdmissionById = asynchHandler(async(req,res,next)=>{
    const id= req.params.id;
    const admission = await admissionRepo.getAdmissionById(id)
    if(admission && admission.length){
      return res.status(201).json({
        success: true,
        data: { message: "Patient with Selected id",admission},
      });
    }
    next(new errorRespons(`Message: admission Doesn't Exist with id ${id}`, 404));
})

//@desc  Update admission Details
//Route PUT /api/v1/admision/id
//Access public

exports.updateAdmission = asynchHandler(async(req,res)=>{
const {mrdNo,admissionDate,dischargeDate,roomNo,chiefPhysician,consultingDr}= req.body
const id = req.params.id
const admissionExist = await admissionRepo.updateAdmission(mrdNo,admissionDate,dischargeDate,roomNo,chiefPhysician,consultingDr)
if(admissionExist){
  res.status(201).json({
    success: true,
    data: { message: "Updated Succesfully"},
  })}else{
    next(new errorRespons(`Message: admisiion Doesn't Exist with id ${id}`, 404));
  }
})
//@desc  Delete admision Details
//Route DELETE /api/v1/admision/id
//Access public

exports.deleteAdmiddion = asynchHandler (async (req,res)=>{
  const id = req.params.id
  const deleted = await admissionRepo.deleteAdmission(id)
  if(deleted){
    res.status(201).json({
      success: true,
      data: { message: "Deleted Succesfully"},
    });
  }else{
    next(new errorRespons(`Message: admission Doesn't Exist with id ${id}`, 404));
  }
})

