let express = require('express')
let {dbConnection} = require('./dbConnection')
let {ObjectId} = require('mongodb');
let app = express()


// CORS middleware - Add this before your other middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});




app.use(express.json())

app.get("/student-read",async(req,res)=>{
	let newdb = await dbConnection();
	let myCollection = newdb.collection('students')

	let findRes = await myCollection.find({}).toArray();
	console.log('Found Documents =>', findRes);
	let obj = {
		"status":200
		,findRes
	};
	console.log(obj)
	res.send(obj)
})

app.post('/student-insert',async(req,res)=>{
	let myDB = await dbConnection();
	let studentCollection = myDB.collection("students")
	
	// 1 method to make obj of req data
	// making an object to store data given in "req"
	//let obj= {
	//	name: req.body.name,
	//	email: req.body.email
	//}
	
	//let {name,email}= req.body;
	//let obj = {name,email}
	//console.log(obj)
	
	// 2nd way of getting req data
	//let insertRes = await studentCollection.insertOne(obj)
	

	// 3rd way of getting req data
//	let obj = req.body;
//	let insertRes = await studentCollection.insertMany(obj)
	

	//prevent duplicate entries

	//1- ensures unique index exits (runs safely even if data is already created )
	//await studentCollection.createIndex({email:1},{unique:true})

	//2- manual check before insert
	let existing = await studentCollection.findOne({email: req.email})
	if(existing){
		console.log("Email already exits");
		return;
		
	}

	//3- if Unique , Attempt Insertion
	try{
		let newData = await studentCollection.insertOne(req.body)
		console.log("User inserted")
	}
	catch(err){
		if(err.code===11000){
			console.log("Duplicate email bocked by DB")
		}else{
			console.log("Error: ",err);
		}
	}

	let resObj = {
		status:1,
		message:"Data Inserted",
	}

	res.send(resObj)
})


app.delete("/student-delete/:id",async (req,res)=>{
	let connectionDB = await dbConnection(); 
	let collectionDB = connectionDB.collection('students')

	let {id}= req.params;

	let deleteRes = await collectionDB.deleteOne({_id:new ObjectId(id)})


	let resObj= {
		status:1,
		message:"Student Deleted",
		deleteRes
	}

	console.log(deleteRes)
	res.send(deleteRes)
})



app.put("/student-update/:id",async(req,res)=>{
	 let {id} = req.params;
	let {name,email} = req.body;
	

	let obj={};
	if(name!=="" && name!==undefined && name!==null){
		//console.log("Name added to OBJ")
		obj['name']=name;
	}
	//let obj= {name,email};
	if(email!=="" && email!==undefined && email!==null){
		//console.log("Email added to obj")
		obj['email']=email;
	}

	console.log(obj)
	
	let myDB = await dbConnection();
	let myCollection = myDB.collection("students")
	let updateRes = await myCollection.updateOne({_id: new ObjectId(id)},{$set:obj})

	let resObj = {
		status:1,
		message:"Student Data updated!",
		updateRes
	}

	res.send(resObj)
})




app.listen('8000')


