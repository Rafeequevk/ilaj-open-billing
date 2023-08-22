const asynchHandler = require("../middlewares/asynchHandler");
const doctorsRepo = require("../repositories/doctors");

//@desc  create a new doctor
//Route POST /api/v1/doctors
//Access public
const createDoctor = asynchHandler(async (req, res, next) => {
  const { name, department } = req.body;
  await doctorsRepo.createDoctor(name,department);
  res.status(200).json({
    success: true,
    data: { message: "Succesfully Added" },
  });
});

//@desc  get all Doctors
//Route GET /api/v1/doctors
//Access public

const getAllDoctors = asynchHandler(async (req, res) => {
  const doctors = await doctorsRepo.getAllDoctor();
  res.status(201).json({
    success: true,
    data: { message: "Complete doctors List", doctors },
  });
});

//@desc  get patient by doctors Id
//Route GET /api/v1/doctors/id
//Access public

const getDoctorById= asynchHandler(async (req, res, next) => {
  const id = req.params.id;
  const doctor = await doctorsRepo.getDoctorById(id);
  return res.status(201).json({
    success: true,
    data: { message: "department with Selected id", doctor },
  });
});

//@desc  Update doctor
//Route PUT /api/v1/doctor/id
//Access public
const updateDoctor = asynchHandler(async (req, res) => {
  const { name, hod } = req.body;
  const id = req.params.id;
  await doctorsRepo.updateDoctor(name, hod, id);

  res.status(201).json({
    success: true,
    data: { message: "Updated Succesfully" },
  });
});

//@desc  Delete Doctor 
//Route DELETE /api/v1/doctors/id
//Access public

const deleteDoctor = asynchHandler(async (req, res) => {
  const id = req.params.id;
  const deleted = await doctorsRepo.deleteDoctor(id);
  if (deleted) {
    res.status(201).json({
      success: true,
      data: { message: "Deleted Succesfully" },
    });
  }
});

module.exports = {
  deleteDoctor,updateDoctor,createDoctor,getAllDoctors,getDoctorById
};
