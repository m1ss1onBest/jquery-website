const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

// TODO: should it not just make the whole folder public?
app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public', '/index.html'))
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
