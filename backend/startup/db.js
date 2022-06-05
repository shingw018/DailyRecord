const mongoose = require("mongoose");
const config = require("config");

module.exports = function () {
  mongoose
    .connect(
      `mongodb+srv://${process.env.MongoDBUsername}:${process.env.MongoDBPassword}@cluster0.rol3f.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Connected to MongoDB"));
};

// module.exports = function () {
//   mongoose
//     .connect(
//       `mongodb+srv://${config.get("MongoDB.username")}:${config.get(
//         "MongoDB.password"
//       )}@cluster0.rol3f.mongodb.net/?retryWrites=true&w=majority`,
//       {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       }
//     )
//     .then(() => console.log("Connected to MongoDB"));
// };
