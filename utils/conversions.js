const {format} = require('date-fns') 
exports.dateConversion = (date)=>{
return format(date,'dd/MM/yyyy')
}