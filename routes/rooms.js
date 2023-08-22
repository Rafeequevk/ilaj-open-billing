const express =require('express')
const roomsController  = require('../controllers/rooms')
const router = express.Router()

router.post('/create',roomsController.createRoom)
router.put('/update/:id',roomsController.updateRoom)
router.delete('/delete/:id',roomsController.deleteRoom)
router.get('/',roomsController.getAllRoom)
router.get('/:id',roomsController.getRoomById)


module.exports = router