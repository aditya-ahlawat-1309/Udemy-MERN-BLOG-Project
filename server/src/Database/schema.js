const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const ObjectId = require("mongoose").Types.ObjectId;
const historySchema = new mongoose.Schema({
  userId: mongoose.Schema.ObjectId,
  history: [
    {
      text: String,
      id: String,
    },
  ],
});

const History = mongoose.model("History", historySchema);

module.exports = {
  User,
  History,
};
