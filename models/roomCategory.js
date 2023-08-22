const { Sequelize, DataTypes, DATE } = require('sequelize');
const sequelize =  require('../config/db');
const roomsCategory = sequelize.define('room_category',{
    category_id:{
        type:DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    rent:{
        type:DataTypes.INTEGER,
        defaultValue:0
    }
})
    
    module.exports={
        roomsCategory
    }