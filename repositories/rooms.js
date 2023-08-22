const { rooms } = require ('../models/rooms')
const createRoom= (name,category) => {
    return new Promise((resolve, reject) => {
        rooms
        .create({
          name: name,
          category_id: category
        })
        .then(() => {
          resolve(true);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };



  const getAllRooms= () => {
    return new Promise((resolve, reject) => {
      rooms
        .findAll()
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };


  const getRoomById = (id) => {
    return new Promise((resolve, reject) => {
      rooms
        .findByPk(id)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };


  const updateRoom= (name,category, id) => {
    const newValues = {
      name: name,
      category_id : category
    };
    return new Promise((resolve, reject) => {
      rooms
        .findByPk(id)
        .then((room) => {
            room.update(newValues);
          resolve(true);
        })
        .catch((err) => {
          reject('not fount record with this id');
        });
    });
  };

const deleteRoom= (id) => {
    return new Promise((resolve, reject) => {
        rooms
        .findByPk(id).then((room) => {
            room
          .destroy({
            where: {
              room_id: id,
            },
          })
          .then(() => {
            resolve(true);
          })
          .catch((err) => {
            reject(err);
          });
      }).catch((err)=>{
        reject('cannott find data with id')
      });
    });
  };
  module.exports={getAllRooms,createRoom,deleteRoom,updateRoom,getRoomById}