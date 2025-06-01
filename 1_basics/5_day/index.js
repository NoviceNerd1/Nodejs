let express = require('express')
let {checkToken}= require("./Middleware_checkToken")
let {checkPass} = require("./Middleware_checkPass")
require("dotenv").config();
let app = express()

app.use(express.json())


// Middlewares - runs before main data
// is in query format -> {url}?token=23131
// used for : token checking, authenitcatoin , or process before showing actual data
// function has slight difference in parameters
// normal : (req,res) ; 	Middleware function:  (req,res,next)
// without executing next() , data or routing will not move forward

//let myToken = "12345"
//let myPass = "12345"

// 1) Middleware using Expression
// 1st level authentication
//let checkToken = (req,res,next)=>{
//	console.log(req.query.token)
//	
//	if(req.query.token =="" || req.query.token == undefined){
//		return res.send(
//			{
//				status:0,
//				message:"Please fill the token! Token EMPTY!"
//			}
//		)
//	}
//	else if(req.query.token!==myToken){
//		return res.send({
//			status:0,
//			message:"Acess Denied! Please fill correct token"
//		})
//	}
//
//	next();
//}
//

//
// app.use(checkToken)

// 2) Arrow function Middleware
// 2nd level authetication

//app.use((req,res,next)=>{
//	console.log(req.query.pass)
//	if(req.query.pass=="" || req.query.pass==undefined){
//		return res.send(
//			{
//				status: 0,
//				message: "Please fill the Password! Password EMPTY!"
//			}
//		)
//	}
//	else if(req.query.pass!=myPass){
//		return res.send(
//			{
//				status:0,
//				message: "Access Denied!! Wrong PASSWORD!!!"
//			}
//		)
//	}
//
//	next();
//})




app.get('/',(req,res)=>{
	res.send({status:1,message:"Home page API"})
})


// U cant pass middlewares are {} - Objects
// either pass as arrays [middlewareA, middlewareB] 
// Or u can pass them simply with commas SEQUENTIALLY " middlewareA, middlewareB"
app.get('/news',checkToken,checkPass,(req,res)=>{
	res.send({status:12, message:"HELLOO BROTHER!!!"})
})

app.get('/products',(req,res)=>{
	res.send({status:145,message:"HEY MAN ITS WORKING"})
})


//POST req - send data from frontend to backend
//3 types- 1) JSON(bodyData) 2)queryData 3) dynamic params


// POST - Dynamic Params
app.get('/login/:id',(req,res)=>{
	let currId = req.params.id
	res.send("Welcome User! Your id: "+ currId);
})



// JSON(body) and query data
app.post('/login',(req,res)=>{
	console.log(req.body)
	console.log({ele: req.query})

// Sending data using status JSON format

	res.status(200).json({
		status:87, 
		message:"Lets see where it goes man", 
		bodyData: req.body,
		queryData: req.query
	})

// Sending data in {} - Object
//		res.send({
//		status:87, 
//		message:"Lets see where it goes man", 
//		bodyData: req.body,
//		queryData: req.query
//	})
})

app.listen(process.env.PORT || 5000)
