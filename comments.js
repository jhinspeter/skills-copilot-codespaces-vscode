// Create web server
// 1. Create a web server that listens on port 3000.
// 2. Respond with the following:
//    - a header with a 200 status code
//    - a JSON object with the following key-value pairs:
//      - success: true
//      - message: 'You have successfully created a new comment.'

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  const data = JSON.stringify({
    success: true,
    message: 'You have successfully created a new comment.',
  });

  res.end(data);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});