const {department} = require ('../models/departments')


const createDepartment = (name) => {
    return new Promise((resolve, reject) => {
        department
        .create({
          name: name,
        })
        .then(() => {
          resolve(true);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };



  const getAllDepartment = () => {
    return new Promise((resolve, reject) => {
      department
        .findAll()
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };


  const getDepartmentById = (p_id) => {
    return new Promise((resolve, reject) => {
      department
        .findByPk(p_id)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };


  const updateDepartment = (name,hod, id) => {
    const newValues = {
      name: name,
      hod: hod,
    };
    return new Promise((resolve, reject) => {
      department
        .findByPk(id)
        .then((department) => {
            department.update(newValues);
          resolve(true);
        })
        .catch((err) => {
          reject('not fount record with this id');
        });
    });
  };

const deleteDepartment = (id) => {
    return new Promise((resolve, reject) => {
        department.findByPk(id).then((department) => {
            department
          .destroy({
            where: {
              department_id: id,
            },
          })
          .then(() => {
            resolve(true);
          })
          .catch((err) => {
            reject(err);
          });
      }).catch((err)=>{reject(('cant find data with id '))});
    });
  };
  module.exports={getAllDepartment,createDepartment,deleteDepartment,updateDepartment,getDepartmentById}