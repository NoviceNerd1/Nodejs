let express = require('express')

let {enquiryInsert,enquiryList,enquiryDelete,enquiryUpdate} = require("../../controller/web/userEnquiryController")

let enquiryRoutes = express.Router();


enquiryRoutes.post('/enquiry-insert',enquiryInsert) 
enquiryRoutes.get('/enquiry-list',enquiryList)
enquiryRoutes.delete("/enquiry-delete/:id",enquiryDelete)
enquiryRoutes.put("/enquiry-update/:id", enquiryUpdate);


module.exports = enquiryRoutes;
