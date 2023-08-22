const pool = require("../config/db");
const BillingQueries = require("../queries/billing");
const { invoice } = require("../models/invoices");
const { transaction } = require("../models/transactions");
const { where } = require("sequelize");

const createInvoice = (admissionId, finalAmount, discountAmount) => {
  return new Promise((resolve, reject) => {
    invoice
      .create({
        admission_id: admissionId,
        final_amount: finalAmount,
        discount_amount: discountAmount,
      })
      .then(() => {
        resolve(true);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const createTransaction = (invoiceId, item, price, quantity) => {
  return new Promise((resolve, reject) => {
    transaction
      .create({
        invoice_id: invoiceId,
        item: item,
        price: price,
        quantity: quantity,
      })
      .then(() => {
        resolve(true);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
const updateBill = (item, price, quantity, id) => {
  return new Promise((resolve, reject) => {
    transaction
      .update(
        { item: item, price: price, quantity: quantity },
        { where: { transaction_id: id } }
      )
      .then(() => resolve(true))
      .catch((err) => reject(err));
  });
};

const deleteBill = (id) => {
  return new Promise((resolve, reject) => {
    transaction.destroy({
      where: {
        transaction_id: id,
      },
    }).then(()=>{
      resolve(true)
    }).catch((err)=>{
      reject(err)
    })
  });
};

const getBillByAdmissionId = (admissionId) => {
  return new Promise((resolve, reject) => {
    pool.query(
      BillingQueries.getBillByAdmissionId,
      [admissionId],
      (error, result) => {
        if (error) reject(error);
        else resolve(result.rows);
      }
    );
  });
};

module.exports = {
  createInvoice,
  createTransaction,
  updateBill,
  deleteBill,
  getBillByAdmissionId,
};
