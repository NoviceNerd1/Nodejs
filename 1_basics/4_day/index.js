let http= require('http')

let server = http.createServer((req,res)=>{
	if(req.url=='/'){
		res.end("Welcome to my World!!");
	}
	else if(req.url=='/other'){
		let obj = {
			status:1,
			data:[
				{
					newsTitle:'I have mastered all elements',
					newsDes:"Not just elemnts but also space and time"
				},{
					newTitle:"Mastery of Elements",
					newsTitle:"A hero of hard work mastered all ELEMENTS"
				}
			]
		}


		res.end(JSON.stringify(obj))

	}
	else if(req.url=='/about'){
		res.end("You have moved into realm of About-ME")
	}
	else if(req.url=='/contactUs'){
		res.end('You have Found a secret realm which hold a way to contact ME')
	}
	else if(req.url=='/project'){
		res.end("<h1>Here i have stored some of the treasures i have built MYSELF</h1>")
	}
	else if(req.url=='/skill'){
		res.end("These are the skills i have stored while developing treasures and grinding")
	}
	else{
		res.end("Page not FOUND!!")
	}
})

server.listen('8080')













































