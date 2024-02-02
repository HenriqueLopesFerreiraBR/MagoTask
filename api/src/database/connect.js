const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect('mongodb+srv://developer:developer@magnummago.wrxrhd7.mongodb.net/?retryWrites=true&w=majority');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Encerra o processo em caso de erro
  }
}

module.exports = {connectDB};