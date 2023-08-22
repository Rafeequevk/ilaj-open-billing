const {roomsCategory} = require ('../models/roomCategory')


const createCategory= (name,rent) => {
    return new Promise((resolve, reject) => {
        roomsCategory
        .create({
          name: name,
          rent: rent
        })
        .then(() => {
          resolve(true);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };



  const getAllCategory= () => {
    return new Promise((resolve, reject) => {
      roomsCategory
        .findAll()
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };


  const getCategoryById = (id) => {
    return new Promise((resolve, reject) => {
      roomsCategory
        .findByPk(id)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };


  const updateCategory= (name,rent, id) => {
    const newValues = {
      name: name,
      rent: rent,
    };
    return new Promise((resolve, reject) => {
      roomsCategory
        .findByPk(id)
        .then((roomsCategory) => {
            roomsCategory.update(newValues);
          resolve(true);
        })
        .catch((err) => {
          reject('not fount record with this id');
        });
    });
  };

const deleteCategory= (id) => {
    return new Promise((resolve, reject) => {
        roomsCategory.findByPk(id).then((roomsCategory) => {
            roomsCategory
          .destroy({
            where: {
              category_id: id,
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
  module.exports={getAllCategory,createCategory,deleteCategory,updateCategory,getCategoryById}