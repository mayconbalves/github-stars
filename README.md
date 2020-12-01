[![Build Status](https://travis-ci.com/mayconbalves/github-stars.svg?token=Jqq2Z92DGjCUxwvsvbuw&branch=main)](https://travis-ci.com/mayconbalves/github-stars)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Runs all switchs of tests

### `yarn lint`

Runs all errors of lint

### `prettier rules`
```
{
  "trailingComma": "none",
  "semi": false,
  "singleQuote": true
}
```

### project architecture
```
  src
    |
    |assets/
    |components/
    |pages/
    |store/
    CombineReducers.js (put all the reducers in here)
    index.js (entry point of app)
    Root.js (put all routes of app)
    setupTestes.js
```


