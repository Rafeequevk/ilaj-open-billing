const pool = require("../config/db");
const patientsDetailQueries = require("../queries/patientsDetail");
const { patientsDetails } = require("../models/patientsDetail");

const createNewPatient = (name, age, gender, mrdNo, address, phone) => {
  date = new Date();
  return new Promise((resolve, reject) => {
    patientsDetails
      .create({
        name: name,
        age: age,
        gender: gender,
        mrd_no: mrdNo,
        address: address,
        phone: phone,
        date: date
      })
      .then((result) => {
        resolve(result.patient_id);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// createNewPatient('kumar',52,'male',1234500,'kazhakoottam',9864)
const getAllPatients = () => {
  return new Promise((resolve, reject) => {
    patientsDetails
      .findAll()
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getPatientById = (p_id) => {
  return new Promise((resolve, reject) => {
    patientsDetails
      .findByPk(p_id)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const updatePatient = (name, age, gender, mrdNo, address, phone, p_id) => {
  const newValues = {
    name: name,
    age: age,
    gender: gender,
    mrd_no: mrdNo,
    address: address,
    phone: phone,
  };
  return new Promise((resolve, reject) => {
    patientsDetails
      .findByPk(p_id)
      .then((patient) => {
        patient.update(newValues);
        resolve(true);
      })
      .catch((err) => {
        reject('not fount record with this id');
      });
  });
};

const deletePatient = (id) => {
  return new Promise((resolve, reject) => {
    patientsDetails
      .destroy({
        where: {
          patient_id: id,
        },
      })
      .then(() => {
        resolve(true);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = {
  createNewPatient,
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatient,
};
