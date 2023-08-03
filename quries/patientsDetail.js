const createNewpatient = 'INSERT INTO PATIENTS_DETAILS(name,age,gender,mrd_no,address,phone) VALUES($1,$2,$3,$4,$5,$6) RETURNING patient_id'
const getAllPatients = 'SELECT patient_id,name,age,gender,mrd_no,address,phone FROM PATIENTS_DETAILS'
const getPatientById = 'SELECT patient_id,name,age,gender,mrd_no,address,phone FROM PATIENTS_DETAILS where patient_id = $1'
const updatePatient = 'UPDATE PATIENTS_DETAILS SET name= $1,age=$2,gender=$3,mrd_no=$4,address=$5,phone=$6 where patient_id = $7'
const deletePatient = 'DELETE FROM PATIENTS_DETAILS WHERE patient_id=$1'


module.exports={createNewpatient,getAllPatients,getPatientById,updatePatient,deletePatient}