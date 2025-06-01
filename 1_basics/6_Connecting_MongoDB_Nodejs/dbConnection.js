const {MongoClient} = require("mongodb")

let dbConnectionUrl = 'mongodb://localhost:27017/';
const client = new MongoClient(dbConnectionUrl);

let dbConnection = async ()=>{
	await client.connect();
	let db = client.db("Mongo_projDatabase")
	return db;
}

module.exports = {dbConnection}















































