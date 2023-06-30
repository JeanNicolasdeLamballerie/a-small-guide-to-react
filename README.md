# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Create React App is a simple CLI that creates a React project and allows you to run it, or build it.
More info on how to do that below in the *Available Scripts* section.




Note : Create React App was recently depreciated for multiple - more or less acceptable - reasons.
It is still fully functional, but using Vite or something like Next.js is now recommended over using a CRA configuration. This should not affect your experience with this project in any way, but should be kept in mind for your future adventures.

Note² : If you end up running a NPM install on the project and see a bunch of security vulnerabilities pop up, do not worry; they're issues contained within the compiler/builder of CRA.
These files NEVER make it into production, and these errors can be safely ignored. Almost every React App compiler will have some vulnerability issues within them.
# Two ways to run this project 



## 1) Without installation of node/npm

This project comes with a Docker configuration that allows you to use and modify the files without needing to install any Javascript tools.
It is still heavily recommended to use an extension for JS and Typescript to analyze the code structure.

Step 1 : Unzip the node_modules.7z archive into the root folder; you should now have a node_modules folder.
This folder holds the libraries installed in the project. It is not normally committed in any way but locally installed with the command `npm install` that parses the package.json file and installs the necessary files.
You wouldn't need to keep it in your project as it could lead to git conflicts, and a simple command would give you the latest (or specific) version of the library you want.
But we want our code editor to be able to recognise the imports in the files even if you don't have npm/node installed, so I included these files for convenience.

Step 2 : That's it ! Run `docker compose up` and open your browser at the address http://localhost:3000/. 
The development server is now running; whenever you make a modification and save it, the website will hot-reload and take your changes into account.

Note : This isn't adapted to production. You will want to bundle your project before deploying it; most likely through a `build` command.

## 2) With node/npm installed

What is necessary for this project to run locally :

- npm (node package manager, used 9.5.1)

- node (v18.16.1 was used to make this, but anything should work)

- typescript depending on setup https://www.typescriptlang.org/id/download. The package is included in the package.json, so it shouldn't be necessary, but you might need an extension to support the language (E.G VS Code's extension for languages)

- see [how to install node-js & npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)


This is designed to be an introduction to various concept within React.


# How does this work ?

## The concept
Each section of the website is meant to be seen (and possibly altered) while having the corresponding files opened in your favourite IDE/ Code Editor (VS Code being recommended).
## So what do I do ?
Start the development server and check out the main page. I'd recommend starting with interacting with the Cheatsheet through the website for some basic information about javascript - don't bother about Cheatsheet.tsx too much for now. Once you're feeling warmed up, try moving on to the actual chapters. Start with Components and Props and move from there - You'll find the relevant code in AboutComponent.tsx and AboutProps.tsx in the "pages"  folder. There will be relevant custom components being imported in the files; don't hesitate to check those out (Most of them are in, unsurprisingly, the components folder).
## Maybe more importantly : have fun !


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



