const {doctor} = require ('../models/doctors')


const createDoctor= (name,department) => {
    return new Promise((resolve, reject) => {
        doctor
        .create({
          name: name,
          department_id: department
        })
        .then(() => {
          resolve(true);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };



  const getAllDoctor= () => {
    return new Promise((resolve, reject) => {
      doctor
        .findAll()
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };


  const getDoctorById = (id) => {
    return new Promise((resolve, reject) => {
      doctor
        .findByPk(id)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };


  const updateDoctor= (name,department, id) => {
    const newValues = {
      name: name,
      department: department,
    };
    return new Promise((resolve, reject) => {
      doctor
        .findByPk(id)
        .then((doctor) => {
            doctor.update(newValues);
          resolve(true);
        })
        .catch((err) => {
          reject('not fount record with this id');
        });
    });
  };

const deleteDoctor= (id) => {
    return new Promise((resolve, reject) => {
        doctor.findByPk(id).then((doctor) => {
            doctor
          .destroy({
            where: {
              doctor_id: id,
            },
          })
          .then(() => {
            resolve(true);
          })
          .catch((err) => {
            reject(err);
          });
      }).catch((err)=>{
        reject('cannott find data with id')
      });
    });
  };
  module.exports={getAllDoctor,createDoctor,deleteDoctor,updateDoctor,getDoctorById}