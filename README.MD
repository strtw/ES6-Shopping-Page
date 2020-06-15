# Presentation 

https://docs.google.com/presentation/d/177wfoht4gURTMTe_qCanYqa6yFVTrK4j-6JT1aSKlo0/edit?usp=sharing

# Live Site

https://strtw.github.io/ES6-Shopping-Page/dist/index.html

# Project Notes

- Application entry file is index.js. 

- State is managed by updating a state object at the top of index.js

- Code formatting with prettier and linting with eslint

# Project structure

- #### styles 
    - SCSS partials that load up to main.min.css

- #### modules
    - Main application modules composed from utils and templates

- #### templates 
    - This is where html creators or template literals live that the application uses to build the html

- #### utils
    - Helpers and event handlers for the app


# Installation

`npm install`

## Develop
 
`npm start`

## Creating production files

`npm run-script build` - outputs minified CSS and JS to /dist