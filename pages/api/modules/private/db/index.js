import mongoose from "mongoose";

export default async () => {
  if (mongoose.connections[0].readyState) return;
  // Using new database connection
  await mongoose.connect('process.env.MONGO_URI', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  console.log("connected to mongodb!");
};
