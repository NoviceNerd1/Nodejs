let express= require('express')
let mongoose = require('mongoose')

let {enquiryInsert,enquiryList,enquiryDelete,enquiryUpdate} = require("./app/controller/web/userEnquiryController")
let enquiryRoutes = require("./app/routes/web/enquiryRoutes")


require('dotenv').config();

let app= express()

app.use(express.json());


app.use("/web/api/enquiry/",enquiryRoutes)


// connect to db
mongoose.connect(process.env.DBURL).then(()=>{
		console.log("Database connected")
		app.listen(process.env.PORT,()=>{
			console.log(`Server is running on http://localhost:${process.env.PORT}/web/api/enquiry/`);
		})
	})
















