const fs = require("fs");
const pdf = require("pdf-creator-node");
const options = require("../utils/options");
const path = require("path");

const generatePdf =(obj)=>{

    const filename = Math.random() + "_doc" + ".pdf";
    const html = fs.readFileSync(
        path.join(__dirname, "../views/templat.html"),
        "utf-8"
      );

    const document = {
        html: html,
        data: {
          datas: obj,
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

    return filename
}

module.exports= generatePdf