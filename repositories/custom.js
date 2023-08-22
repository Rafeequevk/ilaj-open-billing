const pool = require("../config/db");
const { transaction } = require("../models/transactions");
const { invoice } = require("../models/invoices");
const customQueries = require("../queries/custom");
const { patientsDetails } = require("../models/patientsDetail");
const { admission } = require("../models/admission");
const { rooms } = require("../models/rooms");
const { department } = require("../models/departments");
const { doctor } = require("../models/doctors");

const createInvoice = (id) => {
  return new Promise((resolve, reject) => {
       patientsDetails.findAll({
      where: {patient_id:id},
      attributes: ["patient_id", "name", "age", 'gender',"mrd_no", "address", "phone"],
      include: [
        {
          model: admission,
          attributes: [
            "admission_id",
            "admission_date",
            "discharge_date",
            "advance",
            "discharged",
          ],required: false,
          include:[
            { model: rooms, attributes: ["name"]},
            { model: department, attributes: ["name"],include: [{ model: doctor, as:'chief_physician', attributes: ["name"] }]},
            { model: doctor, as:'consultingDoctor', attributes: ["name"] },
          ]
        },
      ]
    }).then((result)=>{
      resolve(result)
    }).catch((err)=>{reject(err)});
  });
};

const getBillItems = (admissionId) => {
  return new Promise((resolve, reject) => {
    transaction
      .findAll({
        attributes: ["transaction_id", "item", "quantity", "price"],
        include: [
          {
            model: invoice,
            attributes: ['invoice_id',"final_amount", "discount_amount", "paid"],
            where: {
              admission_id: admissionId,
            },
          },
        ],
      })
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

module.exports = {
  createInvoice,
  getBillItems,
};
