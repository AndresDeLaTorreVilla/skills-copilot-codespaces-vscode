// Create web server
// 1. Create a web server
// 2. Add a route for comments
// 3. Send a response to the client with the comment data
// 4. Listen for incoming requests
// 5. Start the server
// 6. Visit the server in a web browser

// 1. Create a web server
// Import the http module
const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  console.log('Creating a server...');
});

// 2. Add a route for comments
// Import the url module
const url = require('url');

server.on('request', (req, res) => {
  // Parse the URL
  const parsedUrl = url.parse(req.url, true);

  // Check the path
  if (parsedUrl.pathname === '/comments') {
    console.log('Comments route...');
  }
});

// 3. Send a response to the client with the comment data
server.on('request', (req, res) => {
  // Send a response
res.setHeader('Content-Type', 'application/json');
res.end(JSON.stringify({
    id: 1,
    name: 'John Doe',
    email: ''
}));
})
