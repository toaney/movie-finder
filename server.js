const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const popular_movies = require("./movies_popular.js");
const search_movies = require("./movies_search.js");
const movie_details = require("./movie_details.js");

const port = 4000;

app.use(cors());
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

app.use(express.static(path.join(__dirname, "build")));

app.get("/popular_movies", popular_movies);

app.get("/search_movies", search_movies);

app.get("/movie_details", movie_details);

app.listen(port, () => console.log(`server.js listening on port ${port}!`));
