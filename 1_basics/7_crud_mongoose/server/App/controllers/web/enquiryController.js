const enquiryModel = require("../../models/enquiry.model")

let enquiryInsert = (req,res)=>{
	let {Aname,Aemail,Aphone,Amessage}= req.body;
	let enquiry = enquiryModel({
		name:Aname,
		email:Aemail,
		phone:Aphone,
		message:Amessage
	});

	enquiry.save().then(()=>{
		res.send({status:1,message:"Enquiry Inserted SUccessfully!"});
	}).catch((err)=>{
		res.send({status:0,message:"Error while insertion", Error:err})
	})

}

function isValid(val){
	return val!=="" && val!==undefined && val!==null; 
}


let enquiryUpdate = async(req,res)=>{
	let enquiryId = req.params.id;
	let updateObj = {};
	let {Aname,Aemail,Aphone,Amessage}=req.body;

	if(isValid(Aname)) updateObj['name']=Aname;
	if(isValid(Aemail)) updateObj['email']=Aemail;
	if(isValid(Aphone)) updateObj['phone']=Aphone;
	if(isValid(Amessage)) updateObj['message']=Amessage;

	let updateRes = await enquiryModel.updateOne({_id:enquiryId},updateObj)

	res.send({status:1,message:"Enquiry Updated",updateRes});
}

let enquiryDelete = async(req,res)=>{
	let enquiryId = req.params.id;

	let deleteRes = await enquiryModel.deleteOne({_id:enquiryId});

	res.send({status:1, messaege:"Enquiry Deleted", id:enquiryId,deleteResult:deleteRes});
}

let enquiryList = ( async(req,res)=>{
	let enquiryList = await enquiryModel.find();

	res.send({status:1,message:"Enquiry List Found",data:enquiryList})
})






module.exports = {enquiryInsert, enquiryUpdate,enquiryDelete,enquiryList};



