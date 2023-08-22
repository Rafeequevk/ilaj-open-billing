const {  DataTypes } = require('sequelize');
const sequelize =  require('../config/db');
const {department }= require('../models/departments')

const doctor =sequelize.define('doctor',{
    doctor_id:{
        type:DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
})
// department.hasMany(doctor,{foreignKey:'department_id'})
// doctor.belongsTo(department,{foreignKey:'department_id'})

module.exports = {doctor}