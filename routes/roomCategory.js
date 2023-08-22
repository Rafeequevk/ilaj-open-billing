const express =require('express')
const roomsCategoryController  = require('../controllers/roomCategory')
const router = express.Router()

router.post('/create',roomsCategoryController.createRoomCategory)
router.put('/update/:id',roomsCategoryController.updateRoomCategory)
router.delete('/delete/:id',roomsCategoryController.deleteRoomCategory)
router.get('/',roomsCategoryController.getAllRoomCategorys)
router.get('/:id',roomsCategoryController.getRoomCategoryById)


module.exports = router