let myToken = "12345"
let myPass = "12345"

// 1) Middleware using Expression
// 1st level authentication
let checkToken = (req,res,next)=>{
//	console.log(req.query.token)
	
	if(req.query.token =="" || req.query.token == undefined){
		return res.send(
			{
				status:0,
				message:"Please fill the token! Token EMPTY!"
			}
		)
	}
	else if(req.query.token!==process.env.MYTOKEN){
		return res.send({
			status:0,
			message:"Acess Denied! Please fill correct token"
		})
	}

	next();
}


//app.use(checkToken)

module.exports = {checkToken}
