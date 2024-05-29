# GraphQL Example Project

This project demonstrates a basic GraphQL server setup using Node.js, Express, and the `express-graphql` library. The server provides a simple GraphQL API with queries and mutations for basic operations.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v12.x or later)
- [npm](https://www.npmjs.com/)

### Installation

**Install dependencies:**

npm install

### Running the Server

To start the server, use the following command:

npm start

The server will start on `http://localhost:4000/graphql`. You can open this URL in your browser to access the GraphiQL interface.

## GraphQL API

### Queries

#### `hello`

Returns a greeting message.

```graphql
{
  hello
}
```

#### `quoteOfTheDay`

Returns a random quote.

```graphql
{
  quoteOfTheDay
}
```

#### `random`

Returns a random float number.

```graphql
{
  random
}
```

#### `rollDice`

Rolls a specified number of dice with a specified number of sides and returns the results.

- `numDice` (Int!): Number of dice to roll.
- `numSides` (Int): Number of sides on each die (default is 6).

```graphql
{
  rollDice(numDice: 3, numSides: 6)
}
```

#### `getMessage`

Retrieves the message stored in the fake database.

```graphql
{
  getMessage
}
```

### Mutations

#### `setMessage`

Sets a message in the fake database and returns the message.

- `message` (String): The message to be stored.

```graphql
mutation {
  setMessage(message: "Hello, GraphQL!")
}
```

## Project Structure

- `server.js`: The main file that sets up the Express server and GraphQL API.
- `package.json`: Contains the project dependencies and scripts.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Express](https://expressjs.com/)
- [GraphQL](https://graphql.org/)
- [express-graphql](https://github.com/graphql/express-graphql)
