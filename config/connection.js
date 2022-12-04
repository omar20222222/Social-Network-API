const { connect, connection } = require("mongoose");

const connectionString =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/students-db";

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((connectionData) => {
  console.log(`Successfully connected to MongoDB`);
});

module.exports = connection;
