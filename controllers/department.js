const asynchHandler = require("../middlewares/asynchHandler");
const departmentRepo = require("../repositories/departments");

//@desc  create a new Department
//Route POST /api/v1/department
//Access public
const createNewDepartment = asynchHandler(async (req, res, next) => {
  const { name } = req.body
  await departmentRepo.createDepartment(name);
  res.status(200).json({
    success: true,
    data: { message: "Succesfully Added" },
  });
});

//@desc  get all Department
//Route GET /api/v1/department
//Access public

const getAllDepartment = asynchHandler(async (req, res) => {
  const patients = await departmentRepo.getAllDepartment();
  res.status(201).json({
    success: true,
    data: { message: "Complete Patient List", patients },
  });
});

//@desc  get patient by department Id
//Route GET /api/v1/department/id
//Access public

const getDepartmentById = asynchHandler(async (req, res, next) => {
  const id = req.params.id;
  const department = await departmentRepo.getDepartmentById(id);
  return res.status(201).json({
    success: true,
    data: { message: "department with Selected id", department },
  });
});

//@desc  Update department
//Route PUT /api/v1/department/id
//Access public
const updateDepartment = asynchHandler(async (req, res) => {
  const { name, hod } = req.body;
  const id = req.params.id;
  await departmentRepo.updateDepartment(name, hod, id);

  res.status(201).json({
    success: true,
    data: { message: "Updated Succesfully" },
  });
});

//@desc  Delete Department
//Route DELETE /api/v1/department/id
//Access public

const deleteDepartment = asynchHandler(async (req, res) => {
  const id = req.params.id;
  const deleted = await departmentRepo.deleteDepartment(id);
  if (deleted) {
    res.status(201).json({
      success: true,
      data: { message: "Deleted Succesfully" },
    });
  }
});

module.exports = {
  deleteDepartment,
  updateDepartment,
  getAllDepartment,
  getDepartmentById,
  createNewDepartment,
};
