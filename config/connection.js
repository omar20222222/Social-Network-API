const { connect, connection } = require("mongoose");

const connectionString = process.env.MONGODB_URI || "mongodb://localhost:27017";

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((connectionData) => {
  console.log(`Successfully connected to MongoDB`);
});

module.exports = connection;
