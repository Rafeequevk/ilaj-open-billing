const { Sequelize, DataTypes, DATE } = require("sequelize");
const sequelize = require("../config/db");
const { roomsCategory} = require('../models/roomCategory')

const rooms = sequelize.define('room', {
  room_id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

roomsCategory.hasMany(rooms,{foreignKey:'category_id'})
rooms.belongsTo(roomsCategory,{foreignKey:'category_id'})

module.exports = {
  rooms
};
