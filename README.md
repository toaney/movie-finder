# Lattice Movie Finder

The Lattice Movie Finder is an intuitive Single Page Application(SPA) for exploring movies. This app is built with React and Redux libraries and utilizes [The Movie Database API](https://developers.themoviedb.org/3/getting-started). 

This project was created by Thomas Toan for a Lattice coding challenge. Full requirements of the Lattice Movie Finder can be found [here](https://gist.github.com/andrewhubbs/74084457bf74f136605d0346f932c85b).


## Getting Started

To run the project locally, first install project dependencies and node modules. Two terminals will then be used to run the React app and the Node server. See Installing below for more details.

### Installing

Install project dependencies and node modules by navigating to the project on a terminal and run 'npm install.'

```
npm install
```

After project dependencies have been installed, run 'npm start' to run the React App. By default, this App will run on http://localhost:3000. 

```
npm start
```

In a separate terminal, navigate to the project and run 'node server.js' to run the Node Server. This server is configured to run port 4000. 

```
node server.js
```

Once both Frontend and Backend are running, you will be able to access the Application from your local browser at http://localhost:3000/.

### Features

* When first loaded, the user should see a list of the most popular movies and a search bar.
* A user should be able to search for a movie by title in the search bar, and the matching results should show up in the list of movies.
* A user can click on a movie in the list and be taken to a page that displays more details for the movie (title, movie poster, release date, cast, synopsis, etc)
* Navigation Bar
* Pagination using react-router-dom
* Line indicating how many results were found for a search term. (ex. 'Showing 20 results for "batman".')


## Authors

* **Thomas Toan** - *Software Engineer* 

