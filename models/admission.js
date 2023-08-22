const { Sequelize, DataTypes, DATE } = require('sequelize');
const sequelize =  require('../config/db');
const { patientsDetails } = require('./patientsDetail');
const {rooms}= require('../models/rooms');
const { department } = require('./departments');
const { doctor } = require('./doctors');

const admission = sequelize.define('admission',{
    admission_id :{
        type:DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    mrd_no:{
        type: DataTypes.BIGINT,
        // allowNull: false,
        // unique:true
    },
    admission_date:{
        type:DataTypes.DATE,
        allowNull:false
    }, discharge_date:{
        type:DataTypes.DATE,
    },
    // room_no:{
    //     type :DataTypes.INTEGER,
    //     allowNull:false,
    //     },
    // chief_physician:{
    //     type:DataTypes.INTEGER,
    //     allowNull:false,
    // },
    // consulting_dr:{
    //     type:DataTypes.INTEGER,
    //     allowNull:false,
    // },
    advance:{
        type:DataTypes.INTEGER
    },
    discharged:{
        type:DataTypes.BOOLEAN,
        defaultValue: false

    }

})
patientsDetails.hasMany(admission,{foreignKey:'patient_id'})
admission.belongsTo(patientsDetails,{foreignKey:'patient_id'})

rooms.hasOne(admission,{foreignKey:'room_id'})
admission.belongsTo(rooms,{foreignKey:"room_id"})

department.hasMany(admission,{foreignKey:'department_id'})
admission.belongsTo(department,{foreignKey:'department_id'})

doctor.hasMany(admission,{foreignKey:'doctor_id',as:'consultingDoctor'})
admission.belongsTo(doctor,{foreignKey:'doctor_id',as:'consultingDoctor'})

// admission.sync({alter:true}).then((data)=>{
//     console.log('admission Details Synced',data);
//     }).catch((err)=>{
//         console.log('patient Details sync failed:',err);
//     })


module.exports={
    admission
}