const express =require('express')
const doctorsController  = require('../controllers/doctors')
const router = express.Router()

router.post('/create',doctorsController.createDoctor)
router.put('/update/:id',doctorsController.updateDoctor)
router.delete('/delete/:id',doctorsController.deleteDoctor)
router.get('/',doctorsController.getAllDoctors)
router.get('/:id',doctorsController.getDoctorById)


module.exports = router