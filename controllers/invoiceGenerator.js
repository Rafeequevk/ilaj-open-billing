const billDataRepo = require("../repositories/custom");
const convertToDDMMYYYY = require("../utils/conversions");
const admissionRepo = require("../repositories/admission");
const generatePdf = require("../services/pdfGenerator");

const generateInvoice = async (req, res, next) => {
  const pId = req.params.id;
  const headdata = await billDataRepo.createInvoice(pId);
  const headDet = headdata[0];
  const admisiion = await admissionRepo.getAdmissionByPatientId(pId);
  const billdata = await billDataRepo.getBillItems(admisiion.admission_id);
  const adDate = convertToDDMMYYYY(admisiion.admission_date);
  const disDate = headDet.admissions[0].discharge_date
    ? convertToDDMMYYYY(headDet.admissions[0].discharge_date)
    : null;
  const billHead = {
    age: headDet.age,
    name: headDet.name,
    address: headDet.address,
    mrd: headDet.mrd_no,
    gender: headDet.gender,
    dischargeDate: disDate,
    admissionDate: adDate,
    chiefDr: headDet.admissions[0].department.chief_physician.name,
    consultingDr: headDet.admissions[0].consultingDoctor.name,
    roomNo: headDet.admissions[0].room.name,
  };
  const invoiceNo = billdata[0].invoice.invoice_id;
  let billedItems = [];

  billdata.forEach((d) => {
    const item = {
      item: d.item,
      price: d.price,
      quantity: d.quantity,
      total: d.price * d.quantity,
    };
    billedItems.push(item);
  });
  let finalAmount = 0;
  billedItems.forEach((i) => {
    finalAmount += i.total;
  });
  const obj = {
    patientDet: billHead,
    items: billedItems,
    total: finalAmount,
    invoice: invoiceNo,
  };

  const filename = generatePdf(obj);

  const filepath = "http://localhost:8080/docs/" + filename;

  res.render("download", {
    path: filepath,
  });
  // res.send({ data: billdata });
};

module.exports = {
  generateInvoice,
};
