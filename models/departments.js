const { DataTypes } = require('sequelize');
const sequelize =  require('../config/db');
const { doctor } = require('./doctors');

const department = sequelize.define('department',{
    department_id :{
        type:DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    hod:{
        type:DataTypes.BIGINT
    }
})
// doctor.hasMany(department,{foreignKey: 'hod',as:'chief_physician'})
department.belongsTo(doctor, { foreignKey: 'hod',as:'chief_physician'});

// department.sync({alter:true}).then((data)=>{
//     console.log('admission Details Synced',data);
//     }).catch((err)=>{
//         console.log('patient Details sync failed:',err);
//     })

module.exports={department}

