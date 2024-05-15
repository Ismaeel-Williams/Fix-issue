// app.js

const express = require("express");

const app = express();

// Set up middleware to parse JSON data

app.use(express.json());

// Start the server

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
