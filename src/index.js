const express = require('express');
const dotenv = require('dotenv');

const connectDb = require('./config/connectDB');

dotenv.config();

connectDb();

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
