// Import Required Libraries
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

// Define the GraphQL Schema - Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
    quoteOfTheDay: String
    random: Float
    rollDice(numDice: Int!, numSides: Int): [Int]
    getMessage: String
  }

  type Mutation {
    setMessage(message: String): String
  }
`);

// Define Resolver Functions - The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return "Hello world! Welcome to GraphQL -- A Modern Query Language for APIs";
  },
  quoteOfTheDay: () => {
    return Math.random() < 0.5
      ? "Take it easy. You are doing well"
      : "SLOW IS STEADY. STEADY IS FAST";
  },
  random: () => {
    return Math.random();
  },
  rollDice: ({ numDice, numSides }) => {
    let output = [];
    for (let i = 0; i < numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (numSides || 6)));
    }
    return output;
  },
  setMessage: ({ message }) => {
    fakeDatabase.message = message;
    return message;
  },
  getMessage: () => {
    return fakeDatabase.message;
  },
};

// Set Up a Fake Database - A simple object to act as a database for storing messages
const fakeDatabase = {};

const app = express();
// GraphQL Middleware
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
// Start the Server
app.listen(4000, () => console.log("Now browse to localhost:4000/graphql"));
