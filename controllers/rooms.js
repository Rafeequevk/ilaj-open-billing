const asynchHandler = require("../middlewares/asynchHandler");
const roomsRepo = require("../repositories/rooms");

//@desc  create a new rooms
//Route POST /api/v1/rooms
//Access public
const createRoom = asynchHandler(async (req, res, next) => {
  const { name, category } = req.body;
  await roomsRepo.createRoom(name,category);
  res.status(200).json({
    success: true,
    data: { message: "Succesfully Added" },
  });
});

//@desc  get all Room
//Route GET /api/v1/rooms
//Access public

const getAllRoom = asynchHandler(async (req, res) => {
  const doctors = await roomsRepo.getAllRooms();
  res.status(201).json({
    success: true,
    data: { message: "Complete doctors List", doctors },
  });
});

//@desc  get patient by Room Id
//Route GET /api/v1/room/id
//Access public

const getRoomById= asynchHandler(async (req, res, next) => {
  const id = req.params.id;
  const doctor = await roomsRepo.getRoomById(id);
  return res.status(201).json({
    success: true,
    data: { message: "department with Selected id", doctor },
  });
});

//@desc  Update Rooms
//Route PUT /api/v1/rooms/id
//Access public
const updateRoom = asynchHandler(async (req, res) => {
  const { name, category } = req.body;
  const id = req.params.id;
  await roomsRepo.updateRoom(name, category, id);

  res.status(201).json({
    success: true,
    data: { message: "Updated Succesfully" },
  });
});

//@desc  Delete Rooms
//Route DELETE /api/v1/rooms/id
//Access public

const deleteRoom = asynchHandler(async (req, res) => {
  const id = req.params.id;
  const deleted = await roomsRepo.deleteRoom(id);
  if (deleted) {
    res.status(201).json({
      success: true,
      data: { message: "Deleted Succesfully" },
    });
  }
});

module.exports = {
  deleteRoom,updateRoom,createRoom,getAllRoom,getRoomById
};
