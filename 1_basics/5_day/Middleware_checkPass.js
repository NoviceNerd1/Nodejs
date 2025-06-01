

//2) Arrow function Middleware
//2nd level authetication

//let myPass = "12345"

let checkPass= (req,res,next)=>{
	console.log(req.query.pass)
	if(req.query.pass=="" || req.query.pass==undefined){
		return res.send(
			{
				status: 0,
				message: "Please fill the Password! Password EMPTY!"
			}
		)
	}
	else if(req.query.pass!=process.env.MYPASS){
		return res.send(
			{
				status:0,
				message: "Access Denied!! Wrong PASSWORD!!!"
			}
		)
	}

	next();
}



module.exports = {checkPass}

