const express =require('express')
const departmentController  = require('../controllers/department')
const router = express.Router()

router.post('/create',departmentController.createNewDepartment)
router.put('/update/:id',departmentController.updateDepartment)
router.delete('/delete/:id',departmentController.deleteDepartment)
router.get('/',departmentController.getAllDepartment)
router.get('/:id',departmentController.getDepartmentById)


module.exports = router