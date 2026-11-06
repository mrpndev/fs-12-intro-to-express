# Starting a server
- we need to create a sandbox environment for our project
- within project folder
- use `npm init` or `npm init -y` to create a project
- use `npm i express` or `npm install express` to install express
- use `npm i nodemon --save-dev` to install nodemon
	- nodemon is like liveshare but for server
	- it will restart our server whenever a file changes
- to start our project, we need to add some scripts to our `package.json`
	- `"start": "node app.js"` - starts our project
	- `"dev": "nodemon"` - starts our project in development mode
- to start the server, run `npm run dev`

## Files and Meanings
- `package.json` file (a legend file)
	- keeps track of all required dependencies
	- contains project info
	- contains entry point
	- contains scripts we will run
- `package-lock.json` - a package.json but for our dependencies
- `node_modules/` - contain code for our dependencies

## Dependency

Code created by other developers which we can use to build our application. There are libraries, dependencies, frameworks, and SDK's

- library - code that peforms a task
- dependency - a group of libraries that can perform many different tasks
- framework - a group of dependencies that should be used in a specific way
- Software Development Kit (SDK) - a collection of depencies specifically designed to abstract complex processes away

tl;dr - someone else's code that accomplishes something for us and the we can use.

# What is a server

A computer on the network that listens for requests and sends responses. 

# HTTP Protocol & RESTful Architecture

- The client communicates with the serrver using HTTP protocol
- Done using Representation State Transfer (REST)
- Client sends a request
- Server receives the request and returns a response to the client
- Server has business logic to handle the request/response lifecycle

## Route/Endpoint

A route or endpoint is simply a spot after the socket where a request can be sent.

(1).    (2).  (3). (4).  (5). (6). (7). 
https://www.google.com/search?q=mySearchQuery

1. protocol (http & https) (:80 or :443)
2. naked vs root domain (we can also have subdomains: mail.google.com)
3. domain
4. top level domain
5. endpoint/route (anything after the 'slash')
6. query param key
7. query param values

## HTTP Methods

HTTP methods allow us to define what we're doing with the data when we hit that route. 

There are 40 methods 9 of which are core methods, but you only need to know 4 to 5.

- GET
- POST
- PUT
- DELETE
- OPTIONS (pre flight)

Endpoint can have multiple different methods.

I can have GET /about endpoint and a POST /about endpoint.

Each will be handled differently

## CRUD (Create, Read, Update, Delete)

Anytime we hit a method, it's for a specific purpose

- Create : POST (or GET)
- Read : GET (or POST)
- Update : PUT or PATCH
- Delete : DELETE

## Anatomy of an HTTP Request/Response

- URL - defined the domain, subdomain, top  level domain, route, query params, and HTTP method used. Ex: GET https://google.com/
- Headers - metadata. Contains data such as tokens, CORS info, type of incoming data, etc.
- Body - exists of any request but used mostly on POST, PUT, and PATCH. Can be anything (text, JSON, XML, HTML, and so on.)

Response specific:
- Status Code - health of our req/res (200, 201, 403, 404, 500 and so on)
- Payload - the goodies

### .gitignore

- git file allowing us to define the files and folder we don't want to track
- helpful for ignoring environment variables, dependencies, etc.