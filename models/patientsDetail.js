const { Sequelize, DataTypes, DATE } = require('sequelize');
const sequelize =  require('../config/db');

const patientsDetails = sequelize.define('patients_details',{
    patient_id:{
        type:DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    gender:{
        type:DataTypes.CHAR(6),
        allowNull:false
    },
    mrd_no:{
        type:DataTypes.BIGINT,
        allowNull:false,
        unique:true,
    },
    address:{
       type:DataTypes.STRING,
       allowNull:false 
    },
    phone:{
        type:DataTypes.BIGINT,
        allowNull:false,
        unique:true, 
    },
    date:{
        type:DataTypes.DATE,
        allowNull:false,
    }
})

// patientsDetails.sync().then((data)=>{
// console.log('patient Details Synced',data);
// }).catch((err)=>{
//     console.log('patient Details sync failed:',err);
// })

module.exports={
    patientsDetails
}