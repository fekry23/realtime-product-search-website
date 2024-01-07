const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config({ path: path.join(__dirname, 'config', '.env') });

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../dist/realtime-product-search-website')));

app.get('/', (req, res) => {
  res.send('Hello World from Node.js server!');
});


// Routes
const productRoutes = require('./src/routes/product/productRoutes.js');
app.use('/product', productRoutes);





app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/realtime-product-search-website/src/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
