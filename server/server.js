const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use('/images', express.static(path.join(__dirname, '../my-blog-site/src/assets')));

// Import blogData from JSON file
const blogData = require('./blogData.json');

app.get('/api', (req, res) => {
  res.json(blogData);
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000/api');
});