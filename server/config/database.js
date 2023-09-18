// import mongoose from "mongoose";

// export const connectDB = async () => {
//   const { connection } = await mongoose.connect(process.env.MONGO_URI);
//   console.log(`Mongodb is connected with ${connection.host}`);
// };

import mongoose from "mongoose";
const mongoURI = 'mongodb://127.0.0.1:27017/razor';


mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
