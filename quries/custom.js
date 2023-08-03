invoiceHead = 'select pd.patient_id,a.admission_id, pd.name,pd.age, pd.gender,pd.address,pd.mrd_no,cfd.name as chief_dr,cd.name as consulting_dr,a.admission_date, a.discharge_date,r.room_name FROM patients_details pd INNER JOIN admission a ON pd.patient_id = a.patient_id INNER JOIN chief_doctors cfd ON a.chief_physician=cfd.id INNER JOIN consulting_doctors cd on a.consulting_dr=cd.id  INNER JOIN rooms r ON r.id=a.room_number WHERE pd.patient_id=$1'

billItems = 'select br.record_id, br.item,br.quantity, br.price,i.final_amount,i.discount_amount,i.paid from billing_records br inner join invoices i on i.invoice_id = br.invoice_id where i.admission_id=$1'

module.exports ={
    invoiceHead,billItems
}

