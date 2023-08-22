const pool = require("../config/db");
const admissionQueries = require("../queries/admission");
const { admission } = require("../models/admission");
const { Op } = require("sequelize");

const createAdmission = (
  patientId,
  admisionDate,
  roomNo,
  department,
  consultingDr
) => {
  return new Promise((resolve, reject) => {
    admission
      .create({
        patient_id: patientId,
        admission_date: admisionDate,
        room_id: roomNo,
        department_id: department,
        consulting_dr: consultingDr,
      })
      .then((result) => {
        resolve(result.admission_id);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
const getAllAdmission = () => {
  return new Promise((resolve, reject) => {
    admission
      .findAll()
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getAdmissionById = (id) => {
  return new Promise((resolve, reject) => {
    admission
      .findByPk(id)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
//for get admision by pateint id with discharge is false
const getAdmissionByPatientId = (id) => {
  return new Promise((resolve, reject) => {
    admission
      .findAll({
        where:{[Op.and]:[{patient_id:id },{discharged:false}]}
      })
      .then((result) => {
        resolve(result[0]);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const updateAdmission = (
  dischargeDate,
  roomNo,
  department,
  consultingDr,
  advance,
  discharged,
  id
) => {
  const newValues = {
    discharge_date: dischargeDate,
    room_id: roomNo,
    department_id: department,
    consulting_dr: consultingDr,
    advance: advance,
    discharged: discharged,
  };
  return new Promise((resolve, reject) => {
    admission
      .findByPk(id)
      .then((admission) => {
        admission.update(newValues);
        resolve(true);
      })
      .catch((err) => {
        reject("not found record this id");
      });
  });
};

const deleteAdmission = (id) => {
  return new Promise((resolve, reject) => {
    admission.findByPk(id).then((patient) => {
      patient
        .destroy({
          where: {
            admission_id: id,
          },
        })
        .then(() => {
          resolve(true);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

module.exports = {
  createAdmission,
  getAdmissionById,
  getAllAdmission,
  updateAdmission,
  deleteAdmission,
  getAdmissionByPatientId
};
