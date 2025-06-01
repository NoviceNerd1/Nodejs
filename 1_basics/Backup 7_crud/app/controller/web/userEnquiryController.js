let enquiryModel = require('../../models/enquiry.model')

let enquiryInsert = (req,res)=>{
	let {Aname,Aemail,Aphone,Amessage}= req.body;
	let enquiry = new enquiryModel({
		name:Aname,
		email:Aemail,
		phone: Aphone,
		message: Amessage
	})
	
	enquiry.save().then((data)=>{
		res.send({status:0,message:"Enquiry saved successfully"})
	}).catch((err)=>{
		res.send({status:0, message:"Error while saving query",error:err})
	})
	//res.send(req)
}


let enquiryList = async(req,res)=>{
	let enquiryList = await enquiryModel.find();
	//res.send({status:200,message:"Enquiry List",data:enquiryList})
	//console.log(enquiryList)
	res.status(200).json({status:1, message:"Enquiry list",data:enquiryList})
}


let enquiryDelete = async(req,res)=>{
	let enquiryId = req.params.id;

	let deleteRes = await enquiryModel.deleteOne({_id:enquiryId});

	res.send({status:1, message:"Enquiry deleted successfully", id: enquiryId, delRes: deleteRes})
}



function isValid(val){
	return val!=="" && val!==undefined && val !==null;
}


let enquiryUpdate= async(req,res)=>{
	let enquiryId = req.params.id;
	let updateObj={};
	let {Aname,Aemail,Aphone,Amessage}= req.body;

	if(isValid(Aname)){
		updateObj['name']= Aname;
	}
	

	if(isValid(Aemail)){
		updateObj['email']= Aemail;
	}	
	
	if(isValid(Aphone)){
		updateObj['phone']= Aphone;
	}	

	if(isValid(Amessage)){
		updateObj['message']= Amessage;
	}

	let updateRes = await enquiryModel.updateOne({_id:enquiryId},updateObj)

	res.send({status:1,message:"Its working",updateRes})
}






module.exports = {enquiryInsert, enquiryList,enquiryDelete, enquiryUpdate}




















