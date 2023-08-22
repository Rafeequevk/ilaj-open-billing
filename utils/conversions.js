const {format} = require('date-fns') 


const convertToDDMMYYYY = (date)=>{
    console.log('date',date);
return format(date,'dd/MM/yyyy')
}

module.exports = convertToDDMMYYYY