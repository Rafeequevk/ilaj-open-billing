const createAdmission = 'INSERT INTO admission(patient_id,admission_date,room_number,chief_physician,consulting_dr) VALUES($1,$2,$3,$4,$5) RETURNING admission_id'
const getAllAdmission = 'SELECT admission_id,mrd_no,admission_date,discharge_date,room_number,chief_physician,consulting_dr FROM admission'
const getAdmissionById = 'SELECT admission_id,mrd_no,admission_date,discharge_date,room_number,chief_physician,consulting_dr FROM admission where admission_id = $1'
const updateAdmission = 'UPDATE admission SET mrd_no=$1,admission_date=$2,discharge_date=$3,room_number=$4,chief_physician=$5,consulting_dr=$6 FROM admission where admission_id = $7'
const deleteAdmission = 'DELETE FROM admission WHERE admission_id=$1'


module.exports={createAdmission,getAdmissionById,getAllAdmission,updateAdmission,deleteAdmission}