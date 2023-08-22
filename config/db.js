const { Sequelize } = require('sequelize');

// const { Pool } = require("pg");

const dbConfig = {
  user: "postgres",
  password: "pgadmin",
  host: "localhost",
  port: "5432",
  database: "ilaj_open_billing_db_sq",
};
// const pool = new Pool
//  ( {
//     user: "postgres",
//     password: "pgadmin",
//     host: "localhost",
//     port: "5432",
//     database: "ilaj_open_billing_db_sq",
//   })


// module.exports = pool;
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
  host: 'localhost',
  dialect: 'postgres' 
});

sequelize.authenticate().then(()=>{
  console.log('Connection has been established successfully.')
  sequelize.sync().then((data)=>{
    console.log('Models Synced',);
    }).catch((err)=>{
        console.log('Models  sync failed:',err);
    })

}).catch((err)=>{
  console.error('Unable to connect to the database:', err);
})

module.exports = sequelize;

//'select pd.patient_id,pd.name,pd.age,pd.mrd_no,pd.address, pd.phone, a.admission_id,a.admission_date,a.discharge_date,a.advance,a.discharged, r.name as room_number, d.name as department ,dr.name as chief_physician, from patients_details pd inner join admissions a on pd.patient_id = a.patient_id inner join rooms r on a.room_id=r.room_id inner join departments d on d.department_id = a.department_id inner join doctors dr on d.hod=dr.doctor_id 
