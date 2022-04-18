import mongoose from 'mongoose';

// mongoose return a promise, so we set async/await
const connectDB = (url) => {
  return mongoose.connect(url)
}

export default connectDB;