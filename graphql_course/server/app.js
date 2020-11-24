const express = require("express");
const debug = require("debug")("app");
const mongoose = require("mongoose");
require("dotenv").config(); // This allows express to understand graphql implemented as a middleware
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

const app = express();

mongoose.connect(process.env.MONGO, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.connection.once("open", () => {
  debug(`Connected to database!`);
});

const PORT = 9000;

app.get("/", (req, res) => {
  res.send("Hello world!!");
});

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(PORT, () => debug(`Listening on port ${PORT}`));
