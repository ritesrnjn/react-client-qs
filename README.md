# React Quickstart

## Table of Contents
1. [Requirements](#requirements)
1. [Installation](#getting-started)
1. [Running the Project](#running-the-project)
1. [Project Structure](#project-structure)
1. [Live Development](#local-development)
    * [Hot Reloading](#hot-reloading)
    * [Redux DevTools](#redux-devtools)
1. [Routing](#routing)
1. [Testing](#testing)


## Requirements

* [git](https://git-scm.com/)
* [node.js](https://nodejs.org/)  `^8.0.0`
* [yarn](https://yarnpkg.com/en/) `^0.23.0` or [npm](https://www.npmjs.com/) `^5.0.0`


## Installation

After confirming that development environment meets the above [requirements](#requirements), clone the project:

```bash
$ git clone https://github.com/ritesrnjn/react-qs.git
$ cd react-qs
```

When that's done, install the project dependencies. It is recommended to use [Yarn](https://yarnpkg.com/) for deterministic dependency management, but `npm install` will suffice.

```bash
$ yarn  # Install project dependencies (or `npm install`)
```

## Running the Project

After completing the [installation](#installation) step, you're ready to start the project!

```bash
$ yarn start  # Start the development server (or `npm start`)
```

While developing, you will probably rely mostly on `yarn start`; however, there are additional scripts at your disposal:

|`yarn <script>`    |Description|
|-------------------|-----------|
|`start`            |Serves app at `localhost:3000`|
|`build`            |Builds the application to ./dist|
|`clean`            |Deletes precompiled application folder|
|`analyze`          |Runs webpack bundle analyser|
|`test`             |Runs unit tests with Jest|
|`test:watch`       |Runs `test` in watch mode to re-run tests when changed|
|`test:coverage`    |Runs `test` and shows summary|
|`lint`             |Lints the project for potential errors|
|`lint:fix`         |Lints the project and fixes all correctable errors|
|`check`            |Checks installed node packages for updates


## Project Structure

The project structure used here is **fractal**, where functionality is grouped primarily by feature rather than file type. 
It aims to represent generally accepted guidelines and patterns for building scalable applications.

```
.
├── build                    # All build-related code
├── public                   # Static public assets (not imported anywhere in source code)
├── server                   # Express application that provides webpack middleware
│   └── main.js              # Server application entry point
├── client                   # Application source code
│   ├── index.html           # Main HTML page container for app
│   ├── main.js              # Application bootstrap and rendering
│   ├── normalize.js         # Browser normalization and polyfills
│   ├── components           # Global Reusable Components
│   ├── containers           # Global Reusable Container Components
│   ├── layouts              # Components that dictate major page structure
│   │   └── PageLayout       # Global application layout in which to render routes
│   ├── routes               # Main route definitions and async split points
│   │   ├── Home             # Fractal route
│   │   │   ├── index.js     # Route definitions and async split points
│   │   │   ├── assets       # Assets required to render components
│   │   │   ├── components   # Presentational React Components
│   │   │   └── routes **    # Fractal sub-routes (** optional)
│   │   └── Counter          # Fractal route
│   │       ├── index.js     # Counter route definition
│   │       ├── container    # Connect components to actions and store
│   │       ├── modules      # Collections of reducers/constants/actions
│   │       └── routes **    # Fractal sub-routes (** optional)
│   ├── store                # Redux-specific pieces
│   │   ├── createStore.js   # Create and instrument redux store
│   │   └── reducers.js      # Reducer registry and injection
│   └── styles               # Application-wide styles (generally settings)
│ 
├── server                   # Express Server
│   ├── __tests__            # Unit tests
│   ├── mocks                # Mock JSON files
│   ├── models               # logic for modifying API response 
│   ├── routes               # All middleware routes
│   ├── utils                # Utility files
│   ├── views                # Pug templates
│   └── main.js              # Global Reusable Container Components
│ 
└── tests                    # Unit tests
```

## Live Development

### Hot Reloading

Hot reloading is enabled by default when the application is running in development mode (`yarn start`). 
This feature is implemented with webpack's [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement.html) 
capabilities, where code updates can be injected to the application while it's running, no full reload required. Here's how it works:

* For **JavaScript** modules, a code change will trigger the application to re-render from the top of the tree.
 **Global state is preserved (i.e. redux), but any local component state is reset**. 
 This differs from React Hot Loader, but we've found that performing a full re-render helps avoid subtle bugs caused by RHL patching.

### Redux DevTools

**[Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) is recommended.**
Using the chrome extension allows the monitors to run on a separate thread and affords better performance and functionality. 
It comes with several of the most popular monitors, is easy to configure, filters actions, and doesn't require installing any packages.

## Routing
We use `react-router` [route definitions](https://reacttraining.com/react-router/) (`<pages>/index.js`) to define units of logic within our application. 
See the [project structure](#project-structure) section for more information.

## Testing
Tests are automated for both React and node server using Jest. 
To add a unit test, create a `.test.js` file.

Sample test case is mentioned below
```js
describe('(Redux Module) Counter', () => {
  it('Should initialize with a state of 0 (Number).', () => {
    expect(counterReducer(undefined, {})).toEqual(0)
  })
})
```
