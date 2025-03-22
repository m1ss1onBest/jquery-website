const express = require('express');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hog rider!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
