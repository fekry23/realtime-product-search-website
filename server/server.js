const path = require('path');

const dotenv = require('dotenv');
// Load environment variables from .env file
dotenv.config({ path: path.join(__dirname, 'config', '.env') });

const express = require('express');
const config = require('./config/config.js');


const app = express();
const environment = process.env.NODE_ENV || 'development';
const { port } = config[environment];

app.use(express.static(path.join(__dirname, '../dist/realtime-product-search-website')));

app.get('/', (req, res) => {
  res.send('Hello World from Node.js server!');
});

// Routes
const v1 = require('./v1.0.js') 
app.use('/api/v1.0/', v1);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/realtime-product-search-website/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
