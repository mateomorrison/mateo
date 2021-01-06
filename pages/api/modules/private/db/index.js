import mongoose from 'mongoose';

export default async () => {
  if (mongoose.connections[0].readyState) return;
  // Using new database connection
  await mongoose.connect(
      'mongodb://localhost:27017/mateo'
      , {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  console.log('connected to mongodb')
};