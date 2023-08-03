const fs = require("fs");
const pdf = require("pdf-creator-node");
const path = require("path");
const options = require("../utils/options");
const billDataRepo = require("../repositories/custom");
const dateFormat = require("../utils/conversions");

const generatePdf = async (req, res, next) => {
  const pId = req.params.id;
  const html = fs.readFileSync(
    path.join(__dirname, "../views/templat.html"),
    "utf-8"
  );
  const filename = Math.random() + "_doc" + ".pdf";
  const headdata = await billDataRepo.createInvoice(pId);
  const headDet= headdata[0];
  const admisiionId = headDet.admission_id;
  const billdata = await billDataRepo.getBillItems(admisiionId);
  const adDate = dateFormat.dateConversion(headDet.admission_date);
  // const disDate = dateFormat.dateConversion(headDet[0].discharge_date)
  const billHead = {
    age: headDet.age,
    name: headDet.name,
    address: headDet.address,
    mrd: headDet.mrd_no,
    gender: headDet.gender,
    dischargeDate: headDet.discharge_date,
    admissionDate: adDate,
    chiefDr: headDet.chief_dr,
    consultingDr: headDet.consulting_dr,
    roomNo: headDet.room_name,
  };
  let billedItems=[]

billdata.forEach(d => {
    const item ={
        item: d.item,
        price:d.price,
        quantity: d.quantity,
        total :d.price*d.quantity,
        }
        billedItems.push(item)
});
console.log(billedItems);
let finalAmount =0
billedItems.forEach(i=>{
    finalAmount +=i.total
})
const obj ={
      patientDet: billHead,
      items : billedItems,
      total :finalAmount
}
  

  const document = {
    html: html,
    data: {
        datas: obj
       
    },
    path: "./docs/" + filename,
  };
  pdf
    .create(document, options)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
  const filepath = "" + filename;

  res.render("download", {
    path: filepath,
  });
};

module.exports = {
  generatePdf,
};
