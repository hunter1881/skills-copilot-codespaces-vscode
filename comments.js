// Create web server
// 1. Create a new Express application
// 2. Create a new route for GET requests to '/comments'
// 3. Return a JSON response with a list of comments
// 4. Start the server and listen on port 3000

// 1. Create a new Express application
const express = require("express");
const app = express();

// 2. Create a new route for GET requests to '/comments'
app.get("/comments", (req, res) => {
  // 3. Return a JSON response with a list of comments
  res.json([
    { username: "Todd", comment: "lol so funny" },
    { username: "Skyler", comment: "I like turtles" },
    { username: "Sk8erBoi", comment: "Plz delete this post" },
    { username: "AdaLovelace", comment: "WAT is this even" },
    { username: "Ben", comment: "cool beans" },
  ]);
});

// 4. Start the server and listen on port 3000
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
