// Require/import the HTTP module
let http = require("http");

// Define a port to listen for incoming requests
let PORT_1 = 2100;

let PORT_2 = 2000;
// Create a generic function to handle requests and responses
let handleRequest = function (request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("You are fantastic!");
}

let handleRequest2 = function (request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("You are a piece of pyre!");
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
const server1 = http.createServer(handleRequest);
const server2 = http.createServer(handleRequest2);

// Start our server so that it can begin listening to client requests.
server1.listen(PORT_1, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT_1);
});

server2.listen(PORT_2, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT_2);
});