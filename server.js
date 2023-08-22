const express = require('express')
const dotenv = require('dotenv').config({ path:'./config/config.env'});
const app = express();
var sequelize = require('./config/db')
const path = require('path') 
const expressLayouts = require('express-ejs-layouts')
// app.use(express.static(path.join(__dirname, 'public')));
app.use('/docs', express.static(path.join(__dirname, 'docs')));

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(express.json());


const patientsDetails = require('./routes/patientsDetail')
app.use('/api/v1/patients', patientsDetails)
const admisiion = require('./routes/admission')
app.use('/api/v1/admission',admisiion)
const billing = require('./routes/billing')
app.use('/api/v1/billing',billing)
const viewBill = require('./routes/viewBill')
app.use('/api/v1/viewBill',viewBill)
const doctors = require('./routes/doctors')
app.use ('/api/v1/doctors',doctors)
const departments = require('./routes/departments')
app.use ('/api/v1/departments',departments)
const rooms = require('./routes/rooms')
app.use ('/api/v1/rooms',rooms)
const roomsCategory = require('./routes/roomCategory')
app.use ('/api/v1/roomscategory',roomsCategory)

app.get('/',(req,res)=>{
    res.status(200).json({ success: true, message: "Welcome to Ilaj Open Billing"});

})

const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
  console.log(`Running on ${process.env.NODE_ENV} on Port ${PORT}`);
});
