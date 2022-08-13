const mongoose = require("mongoose");

const DB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected`);
  } catch (err) {
    console.log(`Connection Failed ${err}`);
  }
};

module.exports = {
  DB,
};
