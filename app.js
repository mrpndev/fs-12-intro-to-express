require("dotenv").config()
// ? imports and configures dotenv

const express = require("express")
// ? using dependency requires installing AND importing it
const app = express()
// ? invoke express top level function

const PORT = process.env.PORT
// ? a door into our application
const HOST = process.env.HOST
// ? an IP address of our app - loopback or home address or localhost

// ? host + port => socket

// ? routes/endpoints - path to specific business logic
app.get("/api/health", (req, res) => {
	// ? req - represents incoming request
	console.log(req)
	
	res.status(200).send("<h1 style='color: blue'>The server is running just fine</h1>")
	// ? res - gives access to the response object and its methods
})

/* 
	? Challenge
	* create an endpoint /api/greet
	* have it return:
	* status code of 200
	* json object with a property of message and a value of 'Welcome to fullstack-12'
	* console log that the /api/greet endpoint has been hit
	! SPICEY MODE
	* can you specify the name of the endpoint without hardcoding it?
*/

app.get("/api/greet", (req, res) => {
	console.log(`${req.method} ${req.url} endpoint hit`)
	res.status(200).json({
		message: "Welcome to fullstack-12"
	})
})


app.listen(PORT, HOST, () => {
	console.log(`[server] listening on ${HOST}:${PORT}`)
	console.log(`[server] process running on PID: ${process.pid}`)
})


