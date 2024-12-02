const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    await mongoose
      .connect(process.env.DATABASE, { dbName: 'application' })
      .then(() => console.log('Connected to database'))
      .catch((error) => console.error(error));
  } catch (error) {
    console.error('Error connecting to database:', error);
    process.exit(1);
  }
};

module.exports = connectDb;
