const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(cors());
app.use('/images', express.static(path.join(__dirname, '../my-blog-site/src/assets')));

// Load blogData from JSON file
let blogData = require('./blogData.json');

// Function to refresh blogData from file
function refreshBlogData() {
  fs.readFile(path.join(__dirname, 'blogData.json'), 'utf8', (err, data) => {
    if (!err) {
      try {
        blogData = JSON.parse(data);
        console.log('blogData refreshed');
      } catch (parseErr) {
        console.error('Error parsing blogData.json:', parseErr);
      }
    } else {
      console.error('Error reading blogData.json:', err);
    }
  });
}

// Refresh every 5 minutes (300000 ms)
setInterval(refreshBlogData, 5 * 60 * 1000);

app.get('/api', (req, res) => {
  res.json(blogData);
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000/api');
});