let express = require("express")
let mongoose = require("mongoose")
let enquiryRouter = require('./App/routes/web/enquiryRoutes')
require('dotenv').config();
let app = express() 



app.use(express.json())



// Routes
app.use('/api/website/enquiry',enquiryRouter);






// set up MongoDB
mongoose.connect(process.env.DBURL). then(()=>{
	console.log('Connected to MongoDB');
	app.listen(process.env.PORT || 3000, ()=>{
		console.log(`Server is running on localhost:${process.env.PORT}`)
	})
}).catch((err)=>{
	console.log(err);
})
































