const asynchHandler = require("../middlewares/asynchHandler");
const roomCategoryRepo = require("../repositories/roomsCategory");

//@desc  create a new Category
//Route POST /api/v1/roomcategory
//Access public
const createRoomCategory = asynchHandler(async (req, res, next) => {
  const { name, rent } = req.body;
  await roomCategoryRepo.createCategory(name,rent);
  res.status(200).json({
    success: true,
    data: { message: "Succesfully Added" },
  });
});

//@desc  get all Room Category
//Route GET /api/v1/roomcategory
//Access public

const getAllRoomCategorys = asynchHandler(async (req, res) => {
  const doctors = await roomCategoryRepo.getAllCategory();
  res.status(201).json({
    success: true,
    data: { message: "Complete doctors List", doctors },
  });
});

//@desc  get patient by Room Category Id
//Route GET /api/v1/roomcategory/id
//Access public

const getRoomCategoryById= asynchHandler(async (req, res, next) => {
  const id = req.params.id;
  const doctor = await roomCategoryRepo.getCategoryById(id);
  return res.status(201).json({
    success: true,
    data: { message: "department with Selected id", doctor },
  });
});

//@desc  Update Room Category
//Route PUT /api/v1/roomcategory/id
//Access public
const updateRoomCategory = asynchHandler(async (req, res) => {
  const { name, hod } = req.body;
  const id = req.params.id;
  await roomCategoryRepo.updateCategory(name, hod, id);

  res.status(201).json({
    success: true,
    data: { message: "Updated Succesfully" },
  });
});

//@desc  Delete Room Category
//Route DELETE /api/v1/roomcategory/id
//Access public

const deleteRoomCategory = asynchHandler(async (req, res) => {
  const id = req.params.id;
  const deleted = await roomCategoryRepo.deleteCategory(id);
  if (deleted) {
    res.status(201).json({
      success: true,
      data: { message: "Deleted Succesfully" },
    });
  }
});

module.exports = {
  deleteRoomCategory,updateRoomCategory,createRoomCategory,getAllRoomCategorys,getRoomCategoryById
};
