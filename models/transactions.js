const { Sequelize, DataTypes, DATE } = require('sequelize');
const sequelize =  require('../config/db');
const {invoice} = require('../models/invoices')


const transaction = sequelize.define('transaction',{
    transaction_id:{
        type:DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    item:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    quantity:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})
invoice.hasMany(transaction,{foreignKey:'invoice_id'})
transaction.belongsTo(invoice,{foreignKey:'invoice_id'})

// transaction.sync().then((data)=>{
//     console.log('Transaction Synced',data);
//     }).catch((err)=>{
//         console.log('Transaction  sync failed:',err);
//     })
    
    module.exports={
        transaction
    }