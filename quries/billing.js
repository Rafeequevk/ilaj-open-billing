const createInvoice = 'INSERT INTO invoices(patient_id,admission_id,final_amount,discount_amount) VALUES($1,$2,$3,$4) RETURNING invoice_id'
const createTransaction = 'INSERT INTO billing_records(invoice_id,item,price,quantity)VALUES($1,$2,$3,$4)'
const getAllBilling = 'SELECT billing_id,patient_id,admission_id,item,price,quantity FROM admission'
const getBillById = 'SELECT billing_id,patient_id,admission_id,item,price,quantity FROM admission FROM billing where billing_id = $1'
const updateBill = 'UPDATE billing SET item= $1,price=$2,quantity=$3 where billing_id = $4'
const deleteBill = 'DELETE FROM billing WHERE billing_id=$1'
const getBillByAdmissionId = 'SELECT record_id,invoice_id,item,quantity,price FROM billing_records where invoice_id = $1'


module.exports={createInvoice,createTransaction,getAllBilling,getBillById,updateBill,deleteBill,getBillByAdmissionId}