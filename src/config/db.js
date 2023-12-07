const mongoose = require('mongoose');
process.env.MONGO_URL = 'mongodb://127.0.0.1:27017/NewDB'
const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  };

module.exports = connectDB;
