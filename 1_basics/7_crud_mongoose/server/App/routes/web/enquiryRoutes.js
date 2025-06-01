let express = require('express')
let enquiryRouter = express.Router(); 
const {enquiryInsert,enquiryDelete, enquiryUpdate,enquiryList} = require('../../controllers/web/enquiryController')

enquiryRouter.post('/insert', enquiryInsert);

enquiryRouter.delete('/delete/:id',enquiryDelete);

enquiryRouter.put('/update/:id',enquiryUpdate)

enquiryRouter.get('/list',enquiryList);


module.exports = enquiryRouter;
