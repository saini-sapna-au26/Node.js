const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/saini", {
  userNEWUrlParser: true,
  useUnifiedTopology: true,
});
