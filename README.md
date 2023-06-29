# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Create React App is a simple CLI that creates a React project and allows you to run it, or build it.
More info on how to do that below in the *Available Scripts* section.



What is necessary for this project to run :

- npm (node package manager, used 7.24.0)

- node (v16.10.0 was used to make this, but anything should work)

- typescript depending on setup https://www.typescriptlang.org/id/download. The package is included in the package.json, so it shouldn't be necessary, but you might need an extension to support the language (E.G VS Code's extension for languages)

- see [how to install node-js & npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)


This is designed to be an introduction to various concept within React.

## 1) Available Scripts

Scripts are handled by NPM : they can be a local script running, a CLI, a command, being run in the console. You can declare them in the package.json file.
Some words are reserved to be directly used after `npm` : in particular, `npm start` & `npm test`. 
For other "custom" scripts, after declaring them in your package.json, you should run `npm run [yourscriptname]`.



In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## 2) How to read the contents

### The concept
Each section of the website is meant to be seen (and possibly altered) while having the corresponding files opened.
