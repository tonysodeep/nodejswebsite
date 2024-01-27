const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node.js web server in a Docker container!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});