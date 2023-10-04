const mongoose = require('mongoose');


const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Database connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDb;
