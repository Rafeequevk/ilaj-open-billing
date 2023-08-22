const { Sequelize, DataTypes, DATE } = require('sequelize');
const sequelize =  require('../config/db');
const { patientsDetails } = require('./patientsDetail');
const {admission} =require('./admission')

const invoice = sequelize.define('invoice',{
    invoice_id :{
        type:DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        
    },final_amount:{
        type:DataTypes.INTEGER,
        defaultValue:0
    },
    discount_amount:{
        type:DataTypes.INTEGER,
        defaultValue:0
    },
    paid:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }

})
admission.hasOne(invoice,{foreignKey:'admission_id'})
invoice.belongsTo(admission,{foreignKey:'admission_id'})
// invoice.sync().then((data)=>{
//     console.log('Invocies Synced',data);
//     }).catch((err)=>{
//         console.log('nvocies sync failed:',err);
//     })
module.exports={
    invoice
}