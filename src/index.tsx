import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import router from "./router/RouterWithReact";
import { RouterProvider } from 'react-router-dom';


// This is the core of a react application.

// It isolates a div ( you can find it in the index.html situated in the "public" folder with the id "root") and it'll set this 
// "real" HTML div as the basis for the application. It'll render the entire project within that root.
const root = ReactDOM.createRoot(
  document.getElementById( 'root' ) as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={ router() } />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
