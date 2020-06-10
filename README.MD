# Project Notes

- Application entry file is index.js. 

- Git commit log is in git-commits.log in root folder

- I have broken the code out into modules and attempted to name them, their files, and their functions in a way that is understandable. 

- Code formatting with prettier and linting with eslint


# Project structure

- #### Styles 
    - SCSS partials that load up to main.min.css

- #### Modules
    - Main application modules composed from utils and templates

- #### Templates 
    - This is where html creators or template literals live that the application uses to build the html

- #### Utils
    - Helpers and event handlers for the app


# Installation

`npm install`

## Develop
 
`npm start`

## Creating production files

`npm run-script build` - outputs minified CSS and JS to /dist